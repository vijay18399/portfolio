import { Component, inject, OnInit } from '@angular/core';
import { ToolService } from '../services/tool.service';
import { HotToastService } from '@ngxpert/hot-toast';

@Component({
  selector: 'tool-bar',
  template: `
        <div class="tool-bar" fxLayout="column" fxLayoutAlign="space-between center">
  <!-- Tools Section -->
  <div class="tools" fxLayout="column" fxLayoutGap="10px">
    <button
      class="tool-button"
      matTooltip="Draw"
      [ngClass]="{ active: activeTool === 'pencil' }"
      (click)="selectTool('pencil')"
    >
      <img class="icon" src="images/logos/file.png" alt="Draw" />
    </button>
    <button
      class="tool-button"
      matTooltip="Erase"
      [ngClass]="{ active: activeTool === 'eraser' }"
      (click)="selectTool('eraser')"
    >
      <img class="icon" src="images/logos/eraser.png" alt="Erase" />
    </button>
    <button
      class="tool-button"
      matTooltip="Paint Bucket"
      [ngClass]="{ active: activeTool === 'bucketfill' }"
      (click)="selectTool('bucketfill')"
    >
      <img class="icon" src="images/logos/bucketfill.png" alt="Paint Bucket" />
    </button>
    <button
      class="tool-button"
      matTooltip="Text"
      [ngClass]="{ active: activeTool === 'text' }"
      (click)="selectTool('text')"
    >
      <img class="icon" src="images/logos/text.png" alt="Text Tool" />
    </button>
  </div>

  <!-- Action Buttons Section -->
  <div class="actions" fxLayout="column" fxLayoutGap="10px">
    <button *ngIf="false" mat-menu-item [matMenuTriggerFor]="settingsMenu" class="action-button" matTooltip="Settings">
      <img class="icon" src="images/logos/settings.png" alt="Settings" />
    </button>

    <!-- Angular Material Menu -->
    <mat-menu  yPosition="below" #settingsMenu="matMenu" >
      <div class="menu-container">
      <div class="menu-option">
        <label for="stroke-width" class="menu-label">Stroke Width</label>
        <mat-slider
          id="stroke-width"
          [min]="5"
          [max]="15"
          [step]="1"

          (input)="onInputChange($event)"
        >
        <input matSliderThumb  [(ngModel)]="width" #slider>

      </mat-slider>
        <span class="slider-value">{{ width }}</span>
      </div>

      <!-- Font Family -->
      <div class="menu-option">
        <label for="font-family" class="menu-label">Font Family</label>
        <mat-form-field appearance="fill">
          <mat-select id="font-family" [(value)]="selectedFontFamily" (selectionChange)="updateFontFamily($event)">
            <mat-option *ngFor="let font of fontFamilies" [value]="font">{{ font }}</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      </div>

    </mat-menu>

    <!-- Other Action Buttons -->
    <button class="action-button" matTooltip="Clear" (click)="clear()">
      <img class="icon" src="images/logos/clear.png" alt="clear" />
    </button>
    <button class="action-button" matTooltip="Add Image" (click)="selectImage()">
      <img class="icon" src="images/logos/add_image.png" alt="selectImage" />
    </button>
    <button class="action-button" matTooltip="Undo" (click)="undo()">
      <img class="icon" src="images/logos/undo.svg" alt="Undo" />
    </button>
    <button class="action-button" matTooltip="Redo" (click)="redo()">
      <img class="icon" src="images/logos/redo.svg" alt="Redo" />
    </button>
    <button class="action-button" matTooltip="Save" (click)="saveCanvas()">
      <img class="icon" src="images/logos/download.svg" alt="Save" />
    </button>
  </div>
</div>

  `,
  styles: [
    `
.tool-bar {
    padding: 5px 9px;
    background: #f9fbe7;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-right: 10px;
}

.tool-button,
.action-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
  border-radius: 12px;
  margin: 6px 0px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.tool-button {
  width: 40px;
  height: 40px;
}

.tool-button.active,
.tool-button:hover {
  background-color: #f5f5f5;
  border: 1px solid #d3d2d2;
}

.action-button {
  background: transparent;
}

.action-button:hover {
  opacity: 0.8;
}

.icon {
  width: 28px;
  height: 28px;
}

/* Menu Styling */
.menu-container {
  width: 278px;
    padding: 20px;
    background: #ffffff;
    /* border-radius: 10px; */
    overflow: hidden;
    margin: -8px 0px;
}

.menu-option {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
}

.menu-label {
  font-size: 14px;
  font-weight: 600;
  color: #555;
}

.slider-value {
  font-size: 12px;
  font-weight: bold;
  color: #777;
  text-align: right;
}



      `,
  ],
})
export class ToolBarComponent  {
  activeTool: string = 'pencil'; // Default active tool
  width: number = 5; // Default stroke width
  selectedFontFamily: string = 'Chewy-Regular'; // Default font family

  fontFamilies: string[] = [
    'Chewy-Regular',
    'Times New Roman',
    'Impact',
    'Courier New',
    'Comic Sans MS',
  ];
  private toastService = inject(HotToastService);

  constructor(private toolService: ToolService) {
    this.toolService.toolProperties$.subscribe((properties) => {
      this.width = properties.width;
      this.selectedFontFamily = properties.fontFamily || 'Arial';
      this.activeTool = properties.tool;
    });
  }

  ngOnInit(): void {}

  selectTool(tool: string) {
    this.activeTool = tool; // Update active tool
    this.toolService.updateTool(tool);
  }

  undo() {
    this.toolService.canvas.undo(); // Add undo implementation in ToolService if not present
  }

  redo() {
    this.toolService.canvas.redo(); // Add redo implementation in ToolService if not present
  }

  saveCanvas() {
    const dataURL = this.toolService.canvas.toDataURL();
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'whiteboard.png';
    link.click();
  }

  onInputChange(event: any) {
    this.width = +event.target.value;
    this.toolService.updateWidth(this.width);
  }

  updateFontFamily(event: any) {
    this.selectedFontFamily = event.value;
    this.toolService.updateFontFamily(this.selectedFontFamily);
  }

  selectImage() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/png';
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        if (file.type !== 'image/png') {
          this.showToast('Please select a PNG image only!', 'error'); // Error message
          return;
        }
        this.showToast('Transparent PNG images work best for coloring!', 'info');
        const imageUrl = URL.createObjectURL(file);
        this.toolService.canvas.clear()
        this.toolService.addImage(imageUrl);
        fileInput.value = '';
      }
    };
    fileInput.click();
  }
  showToast(message: string, type:string) {
    if(type=='success') this.toastService.success(message)
    if(type=='info') this.toastService.info(message)
    if(type=='error') this.toastService.error(message)

    }


  clear(){
    this.toolService.canvas.clear();
  }
}
