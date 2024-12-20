interface ScriptSection {
  type: 'intro' | 'main' | 'outro';
  content: string;
  duration: string;
}

export function generateVideoScript(prompt: string): string {
  const sections: ScriptSection[] = [
    {
      type: 'intro',
      content: generateIntro(prompt),
      duration: '0:30'
    },
    {
      type: 'main',
      content: generateMainContent(prompt),
      duration: '2:00'
    },
    {
      type: 'outro',
      content: generateOutro(),
      duration: '0:30'
    }
  ];

  return formatScript(sections);
}

function generateIntro(prompt: string): string {
  return `[FADE IN]

[Upbeat background music starts]

HOST: (enthusiastically)
"${getIntroHook(prompt)}"

[B-Roll: Relevant establishing shots]`;
}

function generateMainContent(prompt: string): string {
  const points = generateKeyPoints(prompt);
  return points.map((point, index) => `
[Scene ${index + 1}]

HOST: (to camera)
"${point}"

[Cut to supporting visuals]
[Show relevant graphics/demonstrations]

`).join('\n');
}

function generateOutro(): string {
  return `[Begin wrapping up]

HOST: (friendly tone)
"Thanks for watching! Don't forget to like and subscribe for more content like this."

[Show social media handles]
[Fade out music]
[End card with call-to-action]

[FADE TO BLACK]`;
}

function getIntroHook(prompt: string): string {
  const hooks = [
    `Have you ever wondered about ${prompt.toLowerCase()}?`,
    `Today, we're diving deep into ${prompt.toLowerCase()}.`,
    `What if I told you that ${prompt.toLowerCase()} could change everything?`
  ];
  return hooks[Math.floor(Math.random() * hooks.length)];
}

function generateKeyPoints(prompt: string): string[] {
  // Simulate generating 3 key points based on the prompt
  return [
    `First, let's talk about why ${prompt.toLowerCase()} matters.`,
    `Here's what most people don't realize about ${prompt.toLowerCase()}.`,
    `The most important thing to remember is how ${prompt.toLowerCase()} can benefit you.`
  ];
}

function formatScript(sections: ScriptSection[]): string {
  const totalDuration = sections.reduce((acc, section) => acc + '\n\nEstimated Duration: ' + section.duration, '');
  
  return sections.map(section => section.content).join('\n\n') + totalDuration;
}