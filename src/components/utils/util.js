const customElements = ['bpmn:Task', /*'bpmn:StartEvent'*/'bpmn:IntermediateThrowEvent',
                        'bpmn:ParallelGateway','bpmn:ComplexGateway','bpmn:InclusiveGateway',
                    'bpmn:IntermediateCatchEvent','bpmn:BusinessRuleTask'] // 自定义元素的类型
const customConfig = { // 自定义元素的配置
    'bpmn:Task': {
        // 'url': require('@assets/rules.png'),
        'url': require('@assets/role2.png'),
        // 'url': require('../../assets/rules.png'),
        // 'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png',
        'attr': { x: 0, y: 0, width: 48, height: 48 }
    },
    'bpmn:IntermediateThrowEvent': {     //图像任务  xxxxxxxx
        // 'url': require('@assets/rules.png'),
        'url': require('@assets/role4.png').default,
        // 'url': require('../../assets/rules.png'),
        // 'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png',
        'attr': { x: 0, y: 0, width: 48, height: 48 }
    },
    // 'bpmn:StartEvent': {                 
    //     'url': require('@assets/start.png'),
    //     'attr': { x: 0, y: 0, width: 40, height: 40 }
    
    // },
    'bpmn:ParallelGateway': {                  //机器人任务  xxxxxxxxx
        'url': require('@assets/role6.png').default,
        'attr': { x: 0, y: 0, width: 48, height: 48 }
    
    },
    'bpmn:ComplexGateway': {                   // 隐私任务     yyyyyyyyyyy
        'url': require('@assets/role5.png'),
        'attr': { x: 0, y: 0, width: 48, height: 48 }
    
    },
     'bpmn:InclusiveGateway': {                 // 声音任务  yyyyyyyyy
        'url': require('@assets/audio.png'),
        'attr': { x: 0, y: 0, width: 48, height: 48 }
    
    },
     'bpmn:IntermediateCatchEvent': {         // 智慧读取任务  xxxxxxxxxxxxx
        'url': require('@assets/role8.jpg').default,
        'attr': { x: 0, y: 0, width: 48, height: 48 }
    
    },
     'bpmn:BusinessRuleTask': {                // 收集任务    xxxxxxxxxxxxxxxxxxx
        'url': require('@assets/role9.png').default,
        'attr': { x: 0, y: 0, width: 48, height: 48 }
    
    },





}
const hasLabelElements = ['Task','bpmn:StartEvent', 'bpmn:EndEvent','bpmn:IntermediateThrowEvent',
                    'bpmn:ParallelGateway','bpmn:ComplexGateway','bpmn:InclusiveGateway','bpmn:IntermediateThrowEvent',
                    'bpmn:IntermediateCatchEvent','BusinessRuleTask'] // 一开始就有label标签的元素类型

export { customElements, customConfig, hasLabelElements }