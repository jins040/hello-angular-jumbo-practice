/**
 * Created by danawacomputer on 2017-06-22.
 */
import {Component} from "@angular/core";

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html'
})
export class MainContentComponent {
  news = {
    headLine : '오늘의 뉴스!!',
    content : '너무 덥네요..',
    buttonLabel : '자세히 보기'
  }
}
