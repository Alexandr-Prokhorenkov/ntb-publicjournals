import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollMemoryService {
  private y: number | null = null;

  snapshot(): void {
    this.y = window.scrollY;
  }

  consume(): number | null {
    const val = this.y;
    this.y = null;
    return val;
  }
}
