import { CommonModule } from '@angular/common';
import { Component, forwardRef, Output, EventEmitter, HostListener  } from '@angular/core';
import { CdkDragEnd, CdkDragMove, DragDropModule,  } from '@angular/cdk/drag-drop';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-drag-toggle',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule

  ],
  templateUrl: './drag-toggle.component.html',
  styleUrl: './drag-toggle.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DragToggleComponent),
      multi: true
    }
  ]
})
export class DragToggleComponent implements ControlValueAccessor{
  // checked = false;
  // dragPosition = { x: 0, y: 0 };
  // onChange: any = () => {};
  // onTouched: any = () => {};

  // @Output() hover = new EventEmitter<void>();
  // @Output() dragEnd = new EventEmitter<boolean>();

  // writeValue(value: boolean): void {
  //   this.checked = value;
  //   this.updateDragPosition();
  // }

  // registerOnChange(fn: any): void {
  //   this.onChange = fn;
  // }

  // registerOnTouched(fn: any): void {
  //   this.onTouched = fn;
  // }

  // onDragMoved(event: CdkDragMove): void {
  //   if (event.distance.x > 50) {
  //     this.checked = true;
  //   } else if (event.distance.x < -50) {
  //     this.checked = false;
  //   }
  //   this.updateDragPosition();
  //   this.onChange(this.checked);
  //   this.onTouched();
  // }

  // onDragEnded(event: any): void {
  //   this.dragEnd.emit(this.checked);
  // }

  // onHover(): void {
  //   if (!this.checked) {
  //     this.checked = true;
  //     this.updateDragPosition();
  //     this.onChange(this.checked);
  //     this.onTouched();
  //     this.hover.emit();
  //   }
  // }

  // onMouseLeave(): void {
  //   if (this.checked && this.dragPosition.x === 0) {
  //     this.checked = false;
  //     this.updateDragPosition();
  //     this.onChange(this.checked);
  //     this.onTouched();
  //   }
  // }

  // private updateDragPosition(): void {
  //   this.dragPosition = { x: this.checked ? 100 : 0, y: 0 };
  // }

  checked = false;
  dragPosition = { x: 0, y: 0 };
  onChange: any = () => {};
  onTouched: any = () => {};
  isDragging = false;

  @Output() hover = new EventEmitter<void>();
  @Output() dragEnd = new EventEmitter<boolean>();

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (this.isDragging) {
      this.resetPosition();
      this.isDragging = false;
    }
  }

  writeValue(value: boolean): void {
    this.checked = value;
    this.updateDragPosition();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onDragMoved(event: CdkDragMove): void {
    this.isDragging = true;
    if (event.distance.x > 50) {
      this.checked = true;
    } else if (event.distance.x < -50) {
      this.checked = false;
    }
    this.updateDragPosition();
  }

  onDragEnded(event: CdkDragEnd): void {
    this.isDragging = false;
    if (event.distance.x > 50) {
      this.checked = true;
      this.dragEnd.emit(true);
    } else {
      this.resetPosition();
    }
    this.onChange(this.checked);
    this.onTouched();
  }

  onHover(): void {
    if (!this.checked) {
      this.checked = true;
      this.updateDragPosition();
      this.onChange(this.checked);
      this.onTouched();
      this.hover.emit();
    }
  }

  onMouseLeave(): void {
    if (!this.isDragging) {
      this.resetPosition();
    }
  }

  private updateDragPosition(): void {
    this.dragPosition = { x: this.checked ? 100 : 0, y: 0 };
  }

  private resetPosition(): void {
    this.checked = false;
    this.updateDragPosition();
    this.onChange(this.checked);
    this.onTouched();
  }
}
