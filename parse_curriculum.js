// Script to parse the civics curriculum markdown and convert to JSON
import fs from 'fs';
import path from 'path';

const curriculumPath = '/home/ubuntu/civics_curriculum.md';
const outputPath = '/home/ubuntu/civics-education-website/src/data/curriculum.json';

// Read the curriculum markdown file
const content = fs.readFileSync(curriculumPath, 'utf8');

// Parse the content into structured data
function parseCurriculum(content) {
  const lines = content.split('\n');
  const curriculum = {
    title: "U.S. Civics Education Curriculum",
    subtitle: "A Comprehensive Guide to American Government and Citizenship",
    chapters: []
  };

  let currentChapter = null;
  let currentLesson = null;
  let currentSection = null;
  let currentContent = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip empty lines and table of contents
    if (!line || line.startsWith('## Table of Contents') || line.startsWith('### Chapter')) {
      continue;
    }

    // Chapter headers (# Chapter X:)
    if (line.match(/^# Chapter \d+:/)) {
      if (currentChapter) {
        curriculum.chapters.push(currentChapter);
      }
      currentChapter = {
        id: line.match(/Chapter (\d+)/)[1],
        title: line.replace(/^# Chapter \d+: /, ''),
        lessons: []
      };
      currentLesson = null;
      currentSection = null;
      currentContent = [];
    }
    // Lesson headers (## Lesson X.X:)
    else if (line.match(/^## Lesson \d+\.\d+:/)) {
      if (currentLesson && currentChapter) {
        if (currentSection && currentContent.length > 0) {
          currentLesson.sections.push({
            title: currentSection,
            content: currentContent.join('\n')
          });
        }
        currentChapter.lessons.push(currentLesson);
      }
      
      const lessonMatch = line.match(/^## Lesson (\d+)\.(\d+): (.+)/);
      currentLesson = {
        id: `${lessonMatch[1]}.${lessonMatch[2]}`,
        title: lessonMatch[3],
        sections: []
      };
      currentSection = null;
      currentContent = [];
    }
    // Section headers (### )
    else if (line.startsWith('### ')) {
      if (currentSection && currentContent.length > 0 && currentLesson) {
        currentLesson.sections.push({
          title: currentSection,
          content: currentContent.join('\n')
        });
      }
      currentSection = line.replace('### ', '');
      currentContent = [];
    }
    // Regular content
    else if (currentLesson && line) {
      currentContent.push(line);
    }
  }

  // Add the last lesson and chapter
  if (currentLesson && currentChapter) {
    if (currentSection && currentContent.length > 0) {
      currentLesson.sections.push({
        title: currentSection,
        content: currentContent.join('\n')
      });
    }
    currentChapter.lessons.push(currentLesson);
  }
  if (currentChapter) {
    curriculum.chapters.push(currentChapter);
  }

  return curriculum;
}

// Parse the curriculum
const parsedCurriculum = parseCurriculum(content);

// Ensure the data directory exists
const dataDir = path.dirname(outputPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Write the JSON file
fs.writeFileSync(outputPath, JSON.stringify(parsedCurriculum, null, 2));

console.log(`Curriculum parsed and saved to ${outputPath}`);
console.log(`Found ${parsedCurriculum.chapters.length} chapters`);
console.log(`Total lessons: ${parsedCurriculum.chapters.reduce((total, chapter) => total + chapter.lessons.length, 0)}`);

