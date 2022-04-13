import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'fiber-dot',
  shadow: true
})
export class FiberDot {
  @Prop() size: number;
  @Prop() x: number;
  @Prop() y: number;
  @Prop() text: string;

  @State() hover: boolean = false;

  enter() {
    this.hover = true;
  }

  leave() {
    this.hover = false;
  }



  render() {
    const s = this.size * 1.3;
    const style = {
      position: 'absolute',
      font: 'normal 15px sans-serif',
      textAlign: 'center',
      cursor: 'pointer',
      width: s + 'px',
      height: s + 'px',
      left: (this.x) + 'px',
      top: (this.y) + 'px',
      borderRadius: (s / 2) + 'px',
      lineHeight: (s) + 'px',
      background: this.hover ? '#ff0' : '#61dafb'
    };
    return (<Host style={style} onmouseenter={this.enter.bind(this)} onmouseleave={this.leave.bind(this)}>
      {this.hover ? '**' + this.text + '**' : this.text}
    </Host>
    );
  }
}
