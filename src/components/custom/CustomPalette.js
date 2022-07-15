export default class CustomPalette {
    constructor(bpmnFactory, create, elementFactory, palette, translate) {
        this.bpmnFactory = bpmnFactory;
        this.create = create;
        this.elementFactory = elementFactory;
        this.translate = translate;

        palette.registerProvider(this);
    }

    getPaletteEntries(element) {
        const {
            bpmnFactory,
            create,
            elementFactory,
            translate
        } = this;

        function createTask() {
            return function(event) {

                console.log(event.type+"taskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")

                const businessObject = bpmnFactory.create('bpmn:Task');
                // businessObject['custom'] = 1

                // const businessObject1 = bpmnFactory.create('bpmn:BoundaryEvent');

                const shape = elementFactory.createShape({
                    type: 'bpmn:Task',
                    businessObject,
                    
                });
                console.log(shape) // 只在拖动或者点击时触发
                create.start(event, shape);
            

            }
        }

        function createGateway1() {
        return function(event) {
            
                
                //添加的新元素
                console.log(event.type+"eventt")
                const businessObject1 = bpmnFactory.create('bpmn:ParallelGateway');
                //businessObject1['custom'] = 1
                const shape1 = elementFactory.createShape({
                    type: 'bpmn:ParallelGateway',
                    
                    businessObject1
                });
                console.log(shape1) // 只在拖动或者点击时触发
                create.start(event, shape1);
        }
    }

        function createGateway2() {
            return function(event) {
                
                    
                    //添加的新元素
                    console.log(event.type+"eventt")
                    const businessObject1 = bpmnFactory.create('bpmn:ComplexGateway');
                    //businessObject1['custom'] = 1
                    const shape1 = elementFactory.createShape({
                        type: 'bpmn:ComplexGateway',
                        
                        businessObject1
                    });
                    console.log(shape1) // 只在拖动或者点击时触发
                    create.start(event, shape1);
            }
        }

        function createGateway3() {
            return function(event) {
                
                    
                    //添加的新元素
                    console.log(event.type+"eventt")
                    const businessObject1 = bpmnFactory.create('bpmn:InclusiveGateway');
                    //businessObject1['custom'] = 1
                    const shape1 = elementFactory.createShape({
                        type: 'bpmn:InclusiveGateway',
                        
                        businessObject1
                    });
                    console.log(shape1) // 只在拖动或者点击时触发
                    create.start(event, shape1);
            }
        }

        function createEvent1() {
            return function(event) {
               
                
                //添加的新元素
                console.log(event.type+"eventtttttttttttttttttttttttttttttttttttttttttttttttttt")
                const businessObject1 = bpmnFactory.create('bpmn:IntermediateThrowEvent');
                //businessObject1['custom'] = 1
                const shape1 = elementFactory.createShape({
                    type: 'bpmn:IntermediateThrowEvent',
                    
                    businessObject1
                });
                console.log(shape1) // 只在拖动或者点击时触发
                create.start(event, shape1);


            }
        }

        function createEvent2() {
            return function(event) {
               
                
                //添加的新元素
                console.log(event.type+"eventtttttttttttttttttttttttttttttttttttttttttttttttttt")
                const businessObject1 = bpmnFactory.create('bpmn:IntermediateCatchEvent');
                //businessObject1['custom'] = 1
                const shape1 = elementFactory.createShape({
                    type: 'bpmn:IntermediateCatchEvent',
                    
                    businessObject1
                });
                console.log(shape1) // 只在拖动或者点击时触发
                create.start(event, shape1);


            }
        }

        function createEvent3() {
            return function(event) {
               
                
                //添加的新元素
                console.log(event.type+"eventt")
                const businessObject1 = bpmnFactory.create('bpmn:BusinessRuleTask');
                //businessObject1['custom'] = 1
                const shape1 = elementFactory.createShape({
                    type: 'bpmn:BusinessRuleTask',
                    
                    businessObject1
                });
                console.log(shape1) // 只在拖动或者点击时触发
                create.start(event, shape1);


            }
        }

        return  {
            'create.lindaidai-task': {
                group: 'model',
                className: 'icon-custom lindaidai-task',
                // className: 'bpmn-icon-user-task',
                title: translate('这是一个传感器类型任务节点'),
                action: {
                    dragstart: createTask(),
                    click: createTask()
                }
            },

            'create.chy-task': {
                group: 'model',
                className: 'icon-custom chy-task',
                // className: 'bpmn-icon-user-task',
                title: translate('这是一个图像捕获类型节点'),
                action: {
                    dragstart: createEvent1(),
                    click: createEvent1()      //关键点！！！！！！！！！！！！！！！！
            }
        
        },

        'create.robot-task': {
            group: 'model',
            className: 'icon-custom robot-task',
            title: '创建一个网关',
            action: {
                dragstart: createGateway1(),
                click: createGateway1()
            }
        },

        'create.lock-task': {
            group: 'model',
            className: 'icon-custom lock-task',
            title: '创建一个网关',
            action: {
                dragstart: createGateway2(),
                click: createGateway2()
            }
        },

        'create.voice-task': {
            group: 'model',
            className: 'icon-custom voice-task',
            title: '创建一个网关',
            action: {
                dragstart: createGateway3(),
                click: createGateway3()
            }
        },

        'create.read-task': {
            group: 'model',
            className: 'icon-custom read-task',
            title: '创建一个网关',
            action: {
                dragstart: createEvent2(),
                click: createEvent2()
            }
        },

        'create.collect-task': {
            group: 'model',
            className: 'icon-custom collect-task',
            title: '创建一个事件',
            action: {
                dragstart: createEvent3(),
                click: createEvent3()
            }
        }

           
        
        

    }
}

}

CustomPalette.$inject = [
    'bpmnFactory',
    'create',
    'elementFactory',
    'palette',
    'translate'
]