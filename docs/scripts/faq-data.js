// docs/support/faq-items.js
export const faqItems = [
  /**
   * Screenshot capture spec (custom keys used below):
   * - screenshot: path to final image (string) or array of images
   * - screenshotNotes: exact capture instructions
   * - media: optional video with caption, alt, poster
   */

  // ──────────────── TRANSFORMS ────────────────

  { section: 'TRANSFORMS' },

  {
    question: 'How do I move a form?',
    answer: [
      'Select the form first (highlighted in orange).',
      '<strong>Quick drag:</strong> With <strong>Position mode</strong> [INSERT: images/faq/move.3d.svg | Position] active (default), drag the form to move it on the view plane.',
      '<strong>Axis handles:</strong> Drag the on-screen X/Y/Z handles (red, green, blue) for axis-constrained movement.',
      '<strong>Precise input:</strong> Open the transform panel [INSERT: images/faq/chevron.up.circle.svg | Up button] and scrub the X/Y/Z values for exact placement.',
    ],
    tip: 'Enable <strong>Snapping</strong> in the transform panel to move in precise increments.',
    screenshot: 'images/faq/move_position_panel_max.png'
  },
  {
    question: 'How do I rotate or scale a form?',
    answer: [
      '<strong>Rotate:</strong> Switch to <strong>Rotation mode</strong> [INSERT: images/faq/rotate.3d.svg | Rotation] and drag the circular handles. In the transform panel, scrub angle values for exact degrees.',
      '<strong>Scale:</strong> Switch to <strong>Scale mode</strong> [INSERT: images/faq/scale.3d.svg | Scale]. Drag a single-axis handle to scale along one axis, or the center handle for uniform scale. In the transform panel, scrub scale values for exact sizing.',
    ],
  },

  {
    question: 'What’s the difference between World and Local space?',
    answer: [
      '<strong>World space</strong>[INSERT: images/faq/globe.svg | World] uses the scene’s fixed X, Y, Z axes. Movement and rotation follow constant directions.',
      '<strong>Local space</strong>[INSERT: images/faq/cube.svg | Local] uses the form’s own axes. If you rotate a form, its local axes rotate with it.',
      'Switch between World and Local in the transform panel when a form is selected.',
    ],
    tip: '<strong>Scaling</strong> is always <strong>local</strong>.',
  },

  {
    question: 'How do I move, rotate, or scale in precise increments?',
    answer: [
      'Open the transform panel [INSERT: images/faq/chevron.up.circle.svg | Up button], then turn on <strong>Snapping</strong> [INSERT: images/faq/ruler.svg | Snap].',
      'Choose the step size for position (e.g., 10 cm) and rotation (e.g., 15°).',
      'Snapping works across all transform methods: dragging the form, using axis handles, and scrubbing the sliders in the panel.'
    ],
    tip: 'When snapping is on, the axis handles and scrubs snap to the nearest step.',
  },

  // ──────────────── VISUALIZATION ────────────────

  { section: 'VISUALIZATION' },

  {
    question: 'What are outlines and see-through?',
    answer: [
      '<strong>Outlines</strong> show the visible external edges of each form, helping you read overall shape.',
      '<strong>See-through</strong> shows the internal form edges even when they’re hidden behind other forms, letting you understand the hidden structure.',
      'You can toggle both in the <strong>Settings</strong>[INSERT: images/faq/gearshape.svg | Settings]<strong> → Form</strong> section:<br>• Toggle <strong>Show outlines</strong> on/off<br>• <strong>See-through outlines</strong> on/off',
    ],
    tip: 'Use outlines to study surface shape, and see-through to inspect hidden edges.',
    screenshot: {
      src: 'images/faq/outlines.jpeg',
      caption: 'Here you can see outlines (shown in black) and see-through (shown in lighter gray).'
    }
  },
  {
    question: 'What are intersections and how do they differ from outlines?',
    answer: [
      '<strong>Intersections</strong> show where two or more forms overlap, revealing how volumes meet.',
      '<strong>Outlines</strong> show each form’s own edges, even when it is not touching anything else.',
      'Adjust intersections in <strong>Settings</strong>[INSERT: images/faq/gearshape.svg | Settings]<strong> → Intersections</strong>:<br>• Toggle <strong>Show intersections</strong> on/off<br>• Enable <strong>See‑through intersections</strong> to show intersections through forms<br>• Adjust <strong>Intersection thickness</strong> (Pro)'
    ],
    screenshot: { 
      src: 'images/faq/intersections.jpeg', 
      caption: 'Here you can see intersections (shown in red) where forms overlap. See-through intersections are also enabled.' 
    },
  },

  // ──────────────── CAMERA & LIGHTING ────────────────

  { section: 'CAMERA & LIGHTING' },

  {
    question: 'How do I change the camera perspective?',
    answer: [
      'Open the <strong>Scene Controls</strong>[INSERT: images/faq/cube.transparent.svg | Scene] and select <strong>Perspective</strong>[INSERT: images/faq/perspective.svg | Perspective].',
      'Use the slider from <strong>0</strong> (orthographic, flat) through natural perspective up to <strong>100</strong> (very wide).',
    ],
    tip: 'The camera keeps your scene framed while you adjust the perspective slider.',
    media: {
      type: 'video',
      source: 'videos/perspective.mp4',
      caption: 'Perspective controls in action.',
      poster: 'images/faq/perspective_poster.jpg'
    },
  },

  {
    question: 'How do I control lighting?',
    answer: [
      'Open the <strong>Scene Controls</strong>[INSERT: images/faq/cube.transparent.svg | Scene] and select <strong>Light</strong>[INSERT: images/faq/sunset.svg | Light].',
      'Drag on the sky-dome to set direction. Adjust intensity with the slider.',
      'Enable <strong>Shadows</strong> (Pro) in <strong>Settings</strong>[INSERT: images/faq/gearshape.svg | Settings]<strong> → Display</strong> section.',
    ],
    media: {
      type: 'video',
      source: 'videos/lighting.mp4',
      caption: 'Lighting controls in action.',
      poster: 'images/faq/perspective_poster.jpg'
    },
  },

  {
    question: 'What is the pivot?',
    answer: [
      'The pivot is the point the camera orbits around when you rotate or pan the view.',
      'When it’s visible, the pivot is shown as a small crosshair [INSERT: images/faq/scope.svg | Pivot] in the scene. It helps you see the center of rotation.',
      'You can hide or show it in <strong>Settings</strong>[INSERT: images/faq/gearshape.svg | Settings]<strong> → Display</strong> by toggling <strong>Show pivot point</strong>.',
    ],
  },

  {
    question: 'How do I set or lock the camera pivot?',
    answer: [
      'Long-press in the scene to set a custom pivot under your finger.',
      'Tap the <strong>Pivot Lock</strong> button [INSERT: images/faq/scope.svg | Pivot] to keep the pivot fixed while you orbit or pan. Tap again to unlock.',
      'To hide the pivot indicator, open <strong>Settings</strong>[INSERT: images/faq/gearshape.svg | Settings]<strong> → Display</strong> and toggle <strong>Show pivot point</strong>.',
    ],
    tip: 'Locking the pivot helps when you want to orbit around a specific detail without it drifting.',
  },

  // ──────────────── SCENES, EXPORT, UNDO/REDO ────────────────

  { section: 'SCENES, EXPORT, UNDO/REDO' },

  {
    question: 'How do I save my scene?',
    answer: [
      'Open <strong>Scene Controls</strong>[INSERT: images/faq/cube.transparent.svg | Scene] and choose <strong>Save Scene</strong>[INSERT: images/faq/tray.and.arrow.down.svg | Save]. Name it, or keep the suggested name based on the forms in view (e.g., “Cube, Sphere”).',
      'To load, open <strong>Scene Controls</strong>[INSERT: images/faq/cube.transparent.svg | Scene]<strong> → Saved Scenes</strong>[INSERT: images/faq/tray.full.svg | Saved].',
    ],
    tip: 'Saved scenes include forms, transforms, camera position, lighting and perspective changes.',
  },

    {
    question: 'How do I delete a scene?',
    answer: [
      'Open <strong>Scene Controls</strong>[INSERT: images/faq/cube.transparent.svg | Scene]<strong> → Saved Scenes</strong>[INSERT: images/faq/tray.full.svg | Saved] and long-press on a scene you want to remove.',
      'Tap <strong>Delete</strong> from the context menu to remove it permanently.',
    ],
    tip: 'If you want to delete all scenes, tap on <strong>Clear All</strong> at the top of the Saved Scenes list.',
  },

  {
    question: 'How do I export an image?',
    answer: [
      'Open <strong>Scene Controls</strong>[INSERT: images/faq/cube.transparent.svg | Scene] and select <strong>Export Image</strong>[INSERT: images/faq/square.and.arrow.up.svg | Share].',
      'The current view is captured as a high-quality PNG. Use the share sheet to save to Photos or share with other apps.',
    ],
  },

  {
    question: 'How do I undo or redo changes?',
    answer: [
      'Use <strong>Undo</strong>[INSERT: images/faq/arrow.uturn.backward.svg | Undo] and <strong>Redo</strong>[INSERT: images/faq/arrow.uturn.forward.svg | Undo] at the bottom of the screen. They track transforms and adding/removing forms.',
    ],
    tip: 'Closing the app clears the undo/redo history.',
  },

  // ──────────────── LEARNING, PRO, PURCHASES ────────────────

  { section: 'LEARNING, PRO, PURCHASES' },

  {
    question: 'How can I learn to use Intersect Studio?',
    answer: [
      'Intersect Studio includes built‑in guidance to help you get started.',
      'In <strong>Settings</strong>[INSERT: images/faq/gearshape.svg | Settings], tap <strong>Show Tutorial</strong> to replay the interactive walkthrough that explains core actions.',
      'You can also tap <strong>Reset Tips</strong> to make on‑screen hints appear again when you open different tools.',
      'Together, they make it easy to rediscover key features at any time without needing external documentation.'
    ],
  },

  {
    question: "What's included in Intersect Studio Pro?",
    answer: [
      'Pro unlocks:',
      '• <strong>Unlimited forms</strong> per scene<br>• <strong>Unlimited saved scenes</strong><br>• <strong>Shadows</strong> rendering<br>• <strong>Intersection thickness</strong> control',
      'Available as monthly or yearly subscription, or lifetime purchase.',
    ],
  },
  {
    question: 'How do I restore my Pro purchase?',
    answer: [
      'Go to <strong>Settings</strong>[INSERT: images/faq/gearshape.svg | Settings] scroll to the bottom, tap <Open Help>, and <strong>Restore Purchases</strong>.',
      'Sign in with the same Apple ID used for the original purchase.',
    ],
  },

  // ──────────────── TROUBLESHOOTING & PRIVACY ────────────────

  { section: 'TROUBLESHOOTING & PRIVACY' },

  {
    question: "Why can't I select or move a form?",
    answer: [
      'Make sure the form is visible and not behind another object from the current view. Orbit the camera to confirm.',
      'Check that <strong>Position mode</strong> [INSERT: images/faq/move.3d.svg] is active; rotation or scale modes disable direct movement.'
    ],
  },

  {
    question: 'Why do intersections disappear or flicker?',
    answer: [
      'If the overlap between forms is extremely thin, intersection lines can be hard to see - especially when very zoomed out or viewed at a very shallow angle.',
      'Try moving the camera a little closer, nudging one form slightly, or enabling see‑through intersections in <strong>Settings</strong>[INSERT: images/faq/gearshape.svg | Settings].'
    ],
    tip: 'Increasing intersection thickness (Pro) can improve visibility in edge cases.',
  },
  {
    question: 'Where are my scenes stored?',
    answer: [
      'All scenes are stored locally on your device. Nothing is uploaded.',
      'If you delete the app, saved scenes are removed. Export images for external backups.',
    ],
  },
  {
    question: 'Why can’t I export or share?',
    answer: [
      'Make sure Photos permission is granted if you want to save to Photos.'
    ],
  },

  // ──────────────── PLATFORMS ────────────────

  { section: 'PLATFORMS' },

  {
    question: 'Does it work on iPhone and iPad?',
    answer: [
      'Yes. Intersect Studio runs on both iPhone and iPad. The interface adapts automatically to larger screens on iPad for a more spacious workspace.'
    ],
  },
  {
    question: 'Can I use Intersect Studio on Mac?',
    answer: [
      'Yes. You can download Intersect Studio for Mac on Apple Silicon computers directly from the Mac App Store.',
      'The interface adapts to larger screens, and the Mac version retains full touch and pointer support since it is designed for iPad.'
    ],
    tip: 'Your purchase or subscription is shared between iPhone, iPad, and Mac when using the same Apple ID.'
  }
];