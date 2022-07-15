# BPMN-plusplus
This is the BPMN modeling element base extension mechanism, you can extend your own elements according to business needs.
## How to extend?

Firstly, the BPMN element extension is modified by modifying the source code of the modeling toolbar, mainly in CustomPalette.js, custom-palette.vue.

Secondly, in order to make the extended elements appear on the canvas, CustomRenderer.js and custom-renderer.vue also need to be modified.
![image](https://github.com/HangyuCheng/BPMN-plusplus/blob/main/src/images/BPMN-toolbar.png)

## BPMNPlusPlus tool
The red square is an extension element based on the industrial Internet business scenario

![image](https://github.com/HangyuCheng/BPMN-plusplus/blob/main/src/images/BPMN-Extension.png)
## BPMNPlusPlus meta-model
 White is a BPMN native element, brown is an extended element based on manufacturing business needs.
![image](https://github.com/HangyuCheng/BPMN-plusplus/blob/main/src/images/meta-model.png)
## Installing dependencies
npm install
## Launch Project
npm run serve
