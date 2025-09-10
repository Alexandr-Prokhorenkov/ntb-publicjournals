import { computed, Injectable, signal } from '@angular/core';
import { Slide } from '../types/slide.interface';

@Injectable()
export class SliderStore {
  public readonly slides = signal<Slide[]>([]);

  public readonly currentIndex = signal(0);
  public readonly isDragging = signal(false);
  public readonly dragOffset = signal(0);

  public readonly nextIndex = computed(() =>
    this.slides().length ? (this.currentIndex() + 1) % this.slides().length : 0,
  );

  public setSlides(slides: Slide[]): void {
    this.slides.set(slides);
    this.currentIndex.set(0);
  }

  public goTo(index: number): void {
    if (index >= 0 && index < this.slides().length) {
      this.currentIndex.set(index);
    }
  }

  public next(): void {
    this.goTo((this.currentIndex() + 1) % this.slides().length);
  }

  public prev(): void {
    this.goTo(this.currentIndex() === 0 ? this.slides().length - 1 : this.currentIndex() - 1);
  }

  public startDrag(): void {
    this.isDragging.set(true);
    this.dragOffset.set(0);
  }

  public updateDrag(delta: number): void {
    this.dragOffset.set(delta);
  }

  public resetDrag(): void {
    this.isDragging.set(false);
    this.dragOffset.set(0);
  }

  public reset(): void {
    this.slides.set([]);
    this.currentIndex.set(0);
    this.isDragging.set(false);
    this.dragOffset.set(0);
  }
}
