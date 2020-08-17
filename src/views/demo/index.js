



export default {
    name: "initdemo",
    props: {
        value: {
            type: [Array, String],
            default: () => ''
        }
    },
    data() {
        return {
            arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            isHtml: '我要要利用domPropsInnerHTML渲染,加个onClick',
            isText: '我要要利用domPropsInnerText渲染',
            content: ''
        }
    },
    methods: {
        rdrInit(h) {
        },
        isOnClick(h) {
            console.log('执行onClick')
        },
        $_handleFocus(h) {
            console.log('_handleFocus')
        },
        $_handleInput(h) {
            this.content = h
            console.log('_handleInput')
        },
        $_handleClick(h) {
            console.log('_handleClick')
        }
    },
    render() {
        const arr = this.rdrInit(h)
        return (
            <div class="c-demo">
                <h5>domPropsInnerHTML:</h5>
                <div domPropsInnerHTML={this.isHtml} onClick={this.isOnClick}></div>
                <h5>domPropsInnerText:</h5>
                <div domPropsInnerText={this.isText}></div>
                <ElInput
                    value={this.content}
                    on={{
                        focus: this.$_handleFocus,
                        input: this.$_handleInput
                    }}
                    nativeOn={{
                        click: this.$_handleClick
                    }}
                ></ElInput>
                <ul>{this.arr.map(item => {
                    return <li>{item}</li>
                })}</ul>
            </div>
        )
    }
}