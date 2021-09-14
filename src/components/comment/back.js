global.mainColor = '#7cc0c0'
global.backColor = '#fff'
global.TouchID=0;
global.back = function (p) {
    return global.mainColor = p[0],
        global.backColor = p[1],
        global.fontColor = p[2]

}

global.touch=function(e){
    return global.TouchID=e
}

// global.back = function (p) {

// }
