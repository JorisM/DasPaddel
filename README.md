# Das Paddel

electron app using the excellent https://github.com/codefoster/waterrower library to track my progress rowing.
the goal is to have an app that will:

  - allow me configure a few workouts with instructions
  - help me with the timing of the workouts
  - track progress of trainings
  - make it as easy as possible to extend/integrate into other services
    - import/export of training data

## run

  npm install
  npm run start

typecheck:

  npm run watch

notice: set debug flag in (`src/component.tsx`) to false if you want to test it with a real water rower

## TODO
- [ ] draw a ui
  - proposal for the workouts: define workout blocks (title, body, duration, distance: optional (only set if you need to row)). then before you start a workout, you drag the blocks into a list, which will be played in order.
- [ ] properly extend from https://github.com/codefoster/waterrower and say thank you
- [ ] define a config format for the workouts and import
- [ ] import past trainings and summarize them


inputs welcome.