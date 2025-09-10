import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class AutoSlideService implements OnDestroy {
  private timer?: ReturnType<typeof setInterval>;

  public start(period: number, onTick: () => void): void {
    this.stop();
    this.timer = setInterval(onTick, period);
  }

  public pause(): void {
    this.stop();
  }

  public resume(period: number, onTick: () => void): void {
    this.start(period, onTick);
  }

  public stop(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  public ngOnDestroy(): void {
    this.stop();
  }
}
