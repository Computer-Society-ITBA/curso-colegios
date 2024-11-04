#!/bin/bash
gnome-terminal -- bash -c "node ./src/services/apiStore.js; exec bash"
gnome-terminal -- bash -c "npm start; exec bash"

