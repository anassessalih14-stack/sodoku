# Sudoku

A responsive, browser-based Sudoku game. Open `index.html` to play, or serve this folder with any static web server. No build tools or dependencies required. The optional Google Fonts request falls back to system fonts offline.

## Features

- Random puzzles with one verified solution and three difficulty levels
- Number pad and keyboard controls, pencil notes, undo, erase, and hints
- Timer, pause screen, conflict highlighting, and completion detection
- Automatic progress saving in this browser (when browser storage is available)
- Responsive layout for phones and computers

Difficulty controls the target clue count (42, 34, or 28); uniqueness can require extra clues. It does not measure advanced solving techniques.

## Publish with GitHub Pages

In repository **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, then save. GitHub will show the game’s published address when deployment finishes.

## Verify puzzle generation

Run `node engine.test.js`. Tests cover solution validity, unique solutions, preserved clues, and candidate calculation.
