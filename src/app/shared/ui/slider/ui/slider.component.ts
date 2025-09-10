import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Slide } from '../types/slide.interface';
import { getSlideTransforms } from '../lib/slider.utils';
import { SliderStore } from '../model/slider.store';
import { AutoSlideService } from '../lib/auto-slide.service';
import { DragSwipeService } from '../lib/drag-swipe.service';
import { SwipeDirection } from '../types/swipe-direction.enum';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SliderStore, AutoSlideService, DragSwipeService],
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() public slides: Slide[] = [];
  @Input() public staticIndex?: number;
  @Input() public autoSlideInterval = 4000;
  @Input() public enableAutoSlide = true;
  @Input() public enableDrag = true;
  @Input() public dragThreshold = 50;
  @Input() public dragButton = 0;

  @ViewChild('sliderContainer', { static: true })
  private container!: ElementRef<HTMLElement>;

  private readonly transformsSignal = computed(() =>
    getSlideTransforms(
      this.sliderStore.currentIndex(),
      this.sliderStore.dragOffset(),
      this.sliderStore.slides().length,
    ),
  );

  public readonly sliderStore = inject(SliderStore);
  private readonly autoSlideService = inject(AutoSlideService);
  private readonly dragSwipeService = inject(DragSwipeService);

  public ngOnInit(): void {
    this.sliderStore.resetDrag();
    this.sliderStore.setSlides(this.slides);

    if (this.staticIndex !== undefined) {
      this.sliderStore.goTo(this.staticIndex);
      return;
    }

    if (this.enableAutoSlide && this.slides.length > 1) {
      this.autoSlideService.start(this.autoSlideInterval, () => this.sliderStore.next());
    }
  }

  public ngOnDestroy(): void {
    this.autoSlideService.stop();
    this.sliderStore.setSlides([]);
    this.sliderStore.resetDrag();
  }

  public onMouseDown(e: MouseEvent): void {
    if (!this.enableDrag || e.button !== this.dragButton) return;
    this.dragStart(e.clientX);
  }

  public onTouchStart(e: TouchEvent): void {
    if (!this.enableDrag) return;
    this.dragStart(e.touches[0].clientX);
  }

  @HostListener('document:mousemove', ['$event'])
  public onMouseMove(e: MouseEvent): void {
    if (!this.isDragging) return;
    this.sliderStore.updateDrag(this.dragSwipeService.delta(e.clientX));
  }

  @HostListener('document:touchmove', ['$event'])
  public onTouchMove(e: TouchEvent): void {
    if (!this.isDragging) return;
    this.sliderStore.updateDrag(this.dragSwipeService.delta(e.touches[0].clientX));
  }

  @HostListener('document:mouseup')
  public onMouseUp(): void {
    this.dragEnd();
  }

  @HostListener('document:touchend')
  public onTouchEnd(): void {
    this.dragEnd();
  }

  private dragStart(clientX: number): void {
    this.sliderStore.startDrag();
    this.dragSwipeService.begin(clientX);
    this.autoSlideService.pause();
    this.container.nativeElement.classList.add('dragging');
  }

  private dragEnd(): void {
    if (!this.isDragging) return;

    const deltaX = this.dragOffset;
    const dir = this.dragSwipeService.direction(deltaX, this.dragThreshold);

    if (dir === SwipeDirection.Left) this.sliderStore.next();
    else if (dir === SwipeDirection.Right) this.sliderStore.prev();

    this.sliderStore.resetDrag();
    this.container.nativeElement.classList.remove('dragging');

    if (this.enableAutoSlide && this.staticIndex === undefined) {
      this.autoSlideService.resume(this.autoSlideInterval, () => this.sliderStore.next());
    }
  }

  public goTo(i: number): void {
    this.sliderStore.goTo(i);
    this.autoSlideService.pause();
    if (this.enableAutoSlide) {
      this.autoSlideService.resume(this.autoSlideInterval, () => this.sliderStore.next());
    }
  }

  public get slidesList(): Slide[] {
    return this.sliderStore.slides();
  }

  public get currentIndex(): number {
    return this.sliderStore.currentIndex();
  }

  public get nextIndex(): number {
    return this.sliderStore.nextIndex();
  }

  public get isDragging(): boolean {
    return this.sliderStore.isDragging();
  }

  public get dragOffset(): number {
    return this.sliderStore.dragOffset();
  }

  public get transformsMap(): Record<number, string | null> {
    return this.transformsSignal();
  }
}
