# FIXME : esbuild architecture error

## Error Message

You installed esbuild for another platform than the one you're currently using. This won't work because esbuild is written with native code and needs to install a platform-specific binary executable. Specifically the "esbuild-linux-64" package is present but this platform needs the "esbuild-darwin-arm64" package instead. People often get into this situation by installing esbuild on Windows or macOS and copying "node_modules" into a Docker image that runs Linux, or by copying "node_modules" between Windows and WSL environments. If you are installing with npm, you can try not copying the "node_modules" directory when you copy the files over, and running "npm ci" or "npm install" on the destination platform after the copy. Or you could consider using yarn instead of npm which has built-in support for installing a package on multiple platforms simultaneously. If you are installing with yarn, you can try listing both this platform and the other platform in your ".yarnrc.yml" file using ...

## TODO

1. Generate color palette
2. Deploy
3. Add React components for display the C4 Landscape
4. Simple Design System
5. Remove boilerplate and create initial file structure
6. Add to Architecture ⬇️

```likeC4 Diagram
[likeC4 Diagram Views](diagrams/likeC4/views.c4)

## AI-Assisted Grading System Architecture

## 1. Input Processing

- Integrate with Google Classroom API to fetch student submissions
- Parse different submission formats (text, image, video)

## 2. AI Analysis Modules

- Text Analysis: NLP for written assignments
- Image Analysis: Computer vision for visual assignments
- Video Analysis:
  - Speech-to-text for transcription
  - Facial expression and gesture recognition
  - Audio analysis for tone and delivery

## 3. Rubric Mapping

- Convert rubric criteria into quantifiable metrics
- Create a scoring algorithm based on rubric weights

## 4. Initial Grading

- Apply AI analysis results to rubric metrics
- Generate initial score and detailed breakdown

## 5. Feedback Generation

- Use language models to create constructive feedback
- Link feedback to specific rubric criteria and AI observations

## 6. Instructor Interface

- Dashboard for reviewing AI-generated grades and feedback
- Tools for modifying scores and feedback
- Final approval mechanism

## 7. Student Feedback Delivery

- Integration with Google Classroom for delivering approved feedback
- Option for students to request clarification or appeal

## 8. Continuous Improvement

- Log instructor modifications for model fine-tuning
- Regular system performance reviews and updates
```
