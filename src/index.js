'use strict';

var famous = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var FamousEngine = famous.core.FamousEngine;
var Position = famous.components.Position;


var scene = FamousEngine.createScene();

var rootnode = scene.addChild()
            .setSizeMode('absolute', 'absolute')
                 .setAbsoluteSize(220, 220)
                 .setMountPoint(0.5,0.5)
                 .setAlign(0.5,0.5);   

var fourRootNodeAlign = [
                [0,0],
                [0,1],
                [1,0],
                [1,1]
                ];

var nineChildNodeAlign = [
                [0,0],[0,0.5],[0,1],
                [0.5,0],[0.5,0.5],[0.5,1],
                [1,0],[1,0.5],[1,1],
                ];

var fourRootNode=[];

for (var i = 0 ; i < 4; i++ ) {
    fourRootNode[i] = rootnode.addChild()
                .setSizeMode('absolute', 'absolute')
                .setAbsoluteSize(110, 110)
                .setMountPoint(fourRootNodeAlign[i][0],fourRootNodeAlign[i][1])
                .setAlign(fourRootNodeAlign[i][0],fourRootNodeAlign[i][1]);
    
    for (var j = 0 ; j <  9; j ++ ){
        var  node =  fourRootNode[i].addChild()
                    .setSizeMode('absolute', 'absolute')
                    .setAbsoluteSize(30, 30)
                    .setMountPoint(nineChildNodeAlign[j][0],nineChildNodeAlign[j][1])
                    .setAlign(nineChildNodeAlign[j][0],nineChildNodeAlign[j][1]);
                   
        // Add the DOMElement (DOMElements are components).
    new DOMElement(node, {
        properties: {
            'height': '30px',
            'width': '30px',
            'color':'white',
            'cursor': 'pointer',
            'opacity': '.99999',
            'letter-spacing': '2px',
            'display': 'inline-block',
            'background-image': "url(./images/famous_logo.png)",
            'background-repeat': 'no-repeat',
            'background-size': '100% 100%',
            '-webkit-box-shadow': '0 0 10px rgba(231,254,237,0.6)',
            '-webkit-backface-visibility': 'visible',
            'text-align': 'center',
            'font-family': '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
            'font-weight': '300'
        }
    });
    };
};


var topLeftOrigin =  new Position(fourRootNode[0]);
var bottomLeftOrigin =  new Position(fourRootNode[1]);
var topRightOrigin =  new Position(fourRootNode[2]);
var bottomRightOrigin = new Position(fourRootNode[3]);


togglePositionFromCenter();

var posBL_X,posBR_X,posTL_X,posTR_X ;
var posBL_Y,posBR_Y,posTL_Y,posTR_Y;


function togglePositionFromCenter() {
  posBL_X = (posBL_X)?0:100;
  posBL_Y = (posBL_Y)?0:100;

  posBR_X = (posBR_X)?0:-100;
  posBR_Y = (posBR_Y)?0:100;

  posTL_X = (posTL_X)?0:-100;
  posTL_Y = (posTL_Y)?0:-100;

  posTR_X = (posTR_X)?0:100;
  posTR_Y = (posTR_Y)?0:-100;
 
  topLeftOrigin.set(posTL_X,posTL_Y,1, {
    duration:2000});

  topRightOrigin.set(posTR_X,posTR_Y,1, {
    duration:2000});

  bottomLeftOrigin.set(posBR_X,posBR_Y,1, {
    duration:2000});

  bottomRightOrigin.set(posBL_X,posBL_Y,1, {
    duration:2000}, togglePositionFromCenter);
}

FamousEngine.init();