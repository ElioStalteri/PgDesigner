// export function drawPath({ x: x0, y: y0, width: width0 }, { x: x1, y: y1, width: width1 },) {
//     return drawPath1({ x: x0, y: y0, width: width0 }, { x: x1, y: y1, width: width1 })
//     let adjsX0 = x0 + width0 / 2
//     let adjsX1 = x1 + width1 / 2
//     let adjsY0 = y0 + 50
//     let adjsY1 = y1 + 50
//     let x = adjsX0
//     let y = adjsY0
//     let path = ""
//     let start = `M ${adjsX0} ${adjsY0} `
//     let end = `L ${adjsX1} ${adjsY1} `

//     const endingX = adjsX0 > adjsX1 ? adjsX1 + width1 / 2 + 31 : adjsX1 - width1 / 2 - 31

//     x += adjsX0 > adjsX1 ? -width0 / 2 - 31 : +width0 / 2 + 31;
//     path += `L ${x} ${y} `
//     if ((adjsX0 > adjsX1 && x > endingX) || (adjsX0 < adjsX1 && x < endingX)) {
//         x += (endingX - x) / 2
//         path += `L ${x} ${y} `
//     }
//     y += (adjsY1 - adjsY0) / 2//(y1-y0)/2
//     path += `L ${x} ${y} `
//     if (adjsX0 > adjsX1 && x < endingX) {
//         x += endingX - x
//     }
//     if (adjsX0 < adjsX1 && x > endingX) {
//         x -= x - endingX
//     }
//     // y += (adjsY1-adjsY0)/2//(y1-y0)/2
//     path += `L ${x} ${y} `
//     y += (adjsY1 - adjsY0) / 2//(y1-y0)/2
//     path += `L ${x} ${y} `
//     // if(Math.abs(adjsX1 - x)>+width1/2+31){
//     // x += adjsX0>adjsX1 ? -width1/2-31 : +width1/2+31;
//     // path += `L ${x} ${y} `
//     // }
//     return start + path + end
// }



export function drawPath({ x: x0, y: y0, width: width0 }, { x: x1, y: y1, width: width1 },adjustPath) {
    const distanceFromObject = 10
    const absoluteStart = { x: x0 + width0 / 2, y: y0 }
    const absoluteEnd = { x: x1 + width0 / 2, y: y1 }
    const relativeStart = {
        x: absoluteStart.x + (absoluteStart.x > absoluteEnd.x ? -width0 / 2 - distanceFromObject : +width0 / 2 + distanceFromObject),
        y: absoluteStart.y
    }
    const relativeEnd = {
        x: absoluteEnd.x + (absoluteStart.x > absoluteEnd.x ? +width1 / 2 + distanceFromObject : -width1 / 2 - distanceFromObject),
        y: absoluteStart.y
    }
    return convertToPathWithCurve(calculatePoints(absoluteStart, absoluteEnd, relativeStart, relativeEnd,adjustPath*0.3))
}

function calculatePoints(absoluteStart, absoluteEnd, relativeStart, relativeEnd,adjustPath):[number,number][] {
    const points = []
    let nextPoint = { ...absoluteStart }
    points.push(Object.values(nextPoint))
    nextPoint = { ...relativeStart,x:relativeStart.x +adjustPath*(relativeStart.x - absoluteStart.x)/Math.abs(relativeStart.x - absoluteStart.x) }
    points.push(Object.values(nextPoint))
    if ((absoluteStart.x > absoluteEnd.x && nextPoint.x > relativeEnd.x) || (absoluteStart.x < absoluteEnd.x && nextPoint.x < relativeEnd.x)) {
        nextPoint.x += (relativeEnd.x - nextPoint.x) / 2
        points.push(Object.values(nextPoint))
    }
    nextPoint.y += (absoluteEnd.y - absoluteStart.y) / 2//(y1-y0)/2
    points.push(Object.values(nextPoint))
    if (absoluteStart.x > absoluteEnd.x && nextPoint.x < relativeEnd.x) {
        nextPoint.x += relativeEnd.x - nextPoint.x + adjustPath 
    }
    if (absoluteStart.x < absoluteEnd.x && nextPoint.x > relativeEnd.x) {
        nextPoint.x -= nextPoint.x - relativeEnd.x + adjustPath 
    }
    points.push(Object.values(nextPoint))

    nextPoint.y += (absoluteEnd.y - absoluteStart.y) / 2//(y1-y0)/2
    points.push(Object.values(nextPoint))
    points.push(Object.values(absoluteEnd))

    return points.map(([x,y])=>[Math.round(x),Math.round(y)])
}

const sweepFl = (S, V, E) => angle(E, S, V) > 0 ? 0 : 1;
const angle = ([a, b], [c, d], [e, f]) => (Math.atan2(f - d, e - c) - Math.atan2(b - d, a - c) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

function convertToPathWithCurve(points: [number,number][]) {
    const newPoints = []
    points.forEach((value, index, array) => {
        if (index != 0 && index != array.length - 1) {
            const prevPoint = array[index - 1]
            const nextPoint = array[index + 1]
            const line = [
                value[0] + 10 * (-value[0] + prevPoint[0]) / (value[0] - prevPoint[0] != 0 ? Math.abs(value[0] - prevPoint[0]) : 1),
                value[1] + 10 * (-value[1] + prevPoint[1]) / (value[1] - prevPoint[1] != 0 ? Math.abs(value[1] - prevPoint[1]) : 1)
            ]
            const arch = [
                value[0] + 10 * (-value[0] + nextPoint[0]) / (value[0] - nextPoint[0] != 0 ? Math.abs(value[0] - nextPoint[0]) : 1),
                value[1] + 10 * (-value[1] + nextPoint[1]) / (value[1] - nextPoint[1] != 0 ? Math.abs(value[1] - nextPoint[1]) : 1)
            ]
            if (Math.abs(nextPoint[0] - prevPoint[0]) <10 || Math.abs(nextPoint[1] - prevPoint[1])<10) {
                newPoints.push({ cmd: "L", point: value })
            } else {
                newPoints.push({ cmd: "L", point: line })
                newPoints.push({ cmd: "A", point: [10, 10, 0, 0, sweepFl(prevPoint, value, nextPoint), ...arch] })
            }
            
        } else {
            newPoints.push({ cmd: index == 0 ? "M" : "L", point: value })
        }
    });
    return newPoints.reduce((acc, v) => acc + `${v.cmd} ${v.point.join(" ")} `, "")
}


