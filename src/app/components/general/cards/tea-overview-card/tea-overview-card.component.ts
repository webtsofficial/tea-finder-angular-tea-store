import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {Tea} from '../../../../models/Tea/Tea';

@Component({
  selector: 'app-tea-overview-card',
  templateUrl: './tea-overview-card.component.html',
  styleUrls: ['./tea-overview-card.component.scss']
})
export class TeaOverviewCardComponent implements OnInit {
  @Input() offerTea: Tea;

  constructor() { }

  ngOnInit() {
  }

}
