import { Component, Prop,h, Host, Element } from '@stencil/core';

@Component({
  tag: 'fiber-demo',
  shadow: true
})
export class FiberDemo {
  @Element() el: HTMLElement
  @Prop() elapsed: number = 0;

  seconds: number = 0;
  intervalID: number;

  componentDidLoad() {
    var tick: Function = this.tick.bind(this);
    this.intervalID = setInterval(tick, 1000);
  }
  tick() {
    this.seconds = (this.seconds % 10) + 1;
  }
  disconnectedCallback() {
    clearInterval(this.intervalID);
  }
  

  render() {
    const elapsed = this.elapsed;
    const t = (elapsed / 1000) % 10;
    const scale = 1 + (t > 5 ? 10 - t : t) / 10;
    var containerStyle = {
      position: 'absolute',
      transformOrigin: '0 0',
      left: '50%',
      top: '50%',
      width: '10px',
      height: '10px',
      background: '#eee',
      transform: 'scaleX(' + (scale / 2.1) + ') scaleY(0.7) translateZ(0.1px)'
    };
    return (
      <Host style={containerStyle}>
        <fiber-triangle
          x={0}
          y={0}
          s={1000}
          seconds={this.seconds}
        >
        </fiber-triangle>
      </Host>
    );
  }
}
