import { Injectable } from '@angular/core';
import { SwipeDirection } from '../types/swipe-direction.enum';

@Injectable()
export class DragSwipeService {
  private startX = 0;

  public begin(clientX: number): void {
    this.startX = clientX;
  }

  public delta(clientX: number): number {
    return clientX - this.startX;
  }

  public direction(deltaX: number, threshold: number): SwipeDirection {
    if (Math.abs(deltaX) > threshold)
      return deltaX > 0 ? SwipeDirection.Right : SwipeDirection.Left;
    return SwipeDirection.None;
  }
}
