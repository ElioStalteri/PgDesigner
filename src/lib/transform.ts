import { writable } from "svelte/store";

let SCALE = 1
let MOVE = [0, 0]
let adjustMouseMovement = 0.5;

export const transform = writable(getTransformViewBox())

function getTransformViewBox() {
    return `matrix(${SCALE},0,0,${SCALE},${MOVE[0]},${MOVE[1]})`;
}

function scale(delta: number) {
    SCALE += delta * 0.025;
    transform.set(getTransformViewBox());
}

function move(delta: [number, number]) {
    MOVE = [MOVE[0] + delta[0] * adjustMouseMovement, MOVE[1] + delta[1] * adjustMouseMovement];
    transform.set(getTransformViewBox());
}

function moveObject(delta: [number, number]) {
    return [delta[0] * adjustMouseMovement / SCALE, delta[1] * adjustMouseMovement / SCALE];
}

let lastMousePos = null;
let mouseMovingView = false;
let mouseMovingObject = false;
let mouseMovingObjectCallback = null;

export const mouseEvent = (type, objectMoveCallback = null) => (ev) => {
    const mouseX = ev.pageX;
    const mouseY = ev.pageY;
    switch (type) {
        case 'up':
        case 'out':
            lastMousePos = null;
            mouseMovingView = false;
            mouseMovingObject = false;
            mouseMovingObjectCallback = null;
            break;
        case 'move':
            if (mouseMovingView) {
                move([mouseX - lastMousePos[0], mouseY - lastMousePos[1]]);
                lastMousePos = [mouseX, mouseY];
            }
            if (mouseMovingObject && mouseMovingObjectCallback) {
                mouseMovingObjectCallback(moveObject([mouseX - lastMousePos[0], mouseY - lastMousePos[1]]));
                lastMousePos = [mouseX, mouseY];
            }
            break;
        case 'down':
            lastMousePos = [mouseX, mouseY];
            mouseMovingView = true;
            break;
        case 'downObject':
            mouseMovingObjectCallback = objectMoveCallback;
            lastMousePos = [mouseX, mouseY];
            mouseMovingObject = true;
            break;
        case 'scroll':
            scale(ev.wheelDelta / Math.abs(ev.wheelDelta));
            break;
    }
};