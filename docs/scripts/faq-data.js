export const faqItems = [
  /**
   * Optional media: { type: 'image' | 'video', source: 'path/to/file', caption?, alt?, poster?, width?, height? }
   * Provide paths relative to docs/support/ (e.g. 'images/faq-panel.png' or 'videos/demo.mp4').
   * Inline icons: use [INSERT: path/to/icon.svg | optional alt text] within answer strings.
   */
  {
    question: 'How do I move a form?',
    answer: [
      'You can move forms only when the form is selected (highlighted in orange).',
      // 'There are two ways to move forms:',
      '<strong>Quick drag:</strong> Tap on a form and drag it around. It will move freely along the plane you\'re viewing. This works only when <strong>Position mode</strong>[INSERT: images/faq/move.3d.svg] is active (default).',
      '<strong>On-screen handles:</strong> Drag on-screen handles to move, rotate, or scale quickly. Switch modes ([INSERT: images/faq/move.3d.svg][INSERT: images/faq/rotate.3d.svg][INSERT: images/faq/scale.3d.svg]) to change the handle.',
      '<strong>Precise control:</strong> Select a form, then tap on the <strong>Expand controls</strong>[INSERT: images/faq/chevron.up.circle.svg] button in the transform panel at the bottom. You can scrub each axis (X, Y, Z) individually for exact placement.',
    ],
    tip: 'Enable snapping in the transform panel menu to move in precise increments.',
    screenshot: 'Screenshot: Transform panel with Position mode selected',
  },
  {
    question: "What's the difference between World and Local space?",
    answer: [
      '<strong>World space</strong> uses the fixed X, Y, Z axes of your scene. These axes never change and stay constant relatice to the scene. Moving or rotating in world space is always relative to these fixed directions.',
      '<strong>Local space</strong> uses the form\'s own orientation. If you rotate a cube, its local axes rotate with it. This makes it easier to move or rotate forms relative to their current orientation.',
      'You can switch between World and Local in the transform panel when you have a form selected.',
    ],
    screenshot: 'images/faq/local-vs-world.png',
  },
  {
    question: 'How do I see intersections between forms?',
    answer: [
      'Intersections are shown automatically when two or more forms overlap. The intersection lines appear where the surfaces meet.',
      'You can control how intersections look in <strong>Settings</strong>:',
      '• Toggle <strong>Show intersections</strong> on/off<br>• Enable <strong>See-through intersections</strong> to show lines behind forms<br>• Adjust <strong>Intersection thickness</strong> (Pro feature)',
    ],
    screenshot: 'Screenshot: Intersection spanelettings ',
  },
  {
    question: 'How do I control lighting?',
    answer: [
      'Tap the scene controls button (top toolbar), then select the <strong>Light</strong> panel.',
      'You can adjust the light direction by dragging on the sky dome visualization, and change intensity with the slider below.',
      'To enable shadows (Pro feature), go to <strong>Settings</strong> and toggle <strong>Enable shadows</strong>.',
    ],
    screenshot: 'Screenshot: Light control panel',
  },
  {
    question: 'How do I change the camera perspective?',
    answer: [
      'Tap the scene controls button (top toolbar), then select the <strong>Perspective</strong> panel.',
      'Use the slider to adjust from orthographic (flat, technical view) through natural perspective to wide-angle and telephoto views.',
    ],
    tip: 'The camera automatically adjusts distance to keep your forms in view as you change perspective.',
    media: {
      type: 'video',
      source: 'videos/perspective.mp4',
      caption: 'Perspective controls in action inside Intersect Studio.',
    },
  },
  {
    question: 'How do I save my scene?',
    answer: [
      'Tap the scene controls button, then choose <strong>Save Scene</strong>. You can give it a custom name or use the default timestamp.',
      'Your saved scenes include all forms, their positions, camera angle, lighting, and a preview thumbnail.',
      'To load a saved scene, tap scene controls and select <strong>Saved Scenes</strong> from the menu.',
    ],
    tip: 'Saving scenes requires Intersect Studio Pro.',
  },
  {
    question: 'How do I export an image?',
    answer: [
      'Tap the scene controls button, then select <strong>Export Image</strong>. The app will capture your current view as a high-quality PNG and open the share sheet.',
      'From there, you can save it to Photos, share it with other apps, or send it to someone.',
    ],
  },
  {
    question: "What's included in Intersect Studio Pro?",
    answer: [
      'Pro unlocks:',
      '• <strong>Unlimited forms</strong> per scene (free is limited)<br>• <strong>Unlimited saved scenes</strong><br>• <strong>Shadows</strong> for added depth<br>• <strong>Intersection thickness</strong> control',
      'Pro is available as a monthly subscription, yearly subscription, or lifetime purchase.',
    ],
  },
  {
    question: 'How do I restore my Pro purchase?',
    answer: [
      'Go to <strong>Settings</strong>, scroll to the bottom, and tap <strong>Restore Purchases</strong>.',
      'Make sure you\'re signed in with the same Apple ID you used to purchase Pro. Your purchase will be restored automatically.',
    ],
  },
  {
    question: 'How do I undo or redo changes?',
    answer: [
      'Use the <strong>Undo</strong> and <strong>Redo</strong> buttons at the bottom of the screen. They track changes to transforms, adding/deleting forms, and clearing the scene.',
    ],
  },
  {
    question: 'Can I use this on iPad?',
    answer: [
      'Yes! Intersect Studio works on both iPhone and iPad. The interface adapts to take advantage of the larger screen on iPad.',
    ],
  },
];
