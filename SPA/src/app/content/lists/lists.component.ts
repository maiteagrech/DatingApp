import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";

interface IRelease {
  id: number;
  name: string;
  wrappers: IStoryWrapper[];
}
interface IStoryWrapper {
  id: number;
  relatedJourneyId: number;
  lanes: IStoryLane[];
}
interface IStoryLane {
  id: number;
  stories: IStory[];
}
interface IStory {
  id: any;
  //   relatedStepId?: number;
  content: string;
}
interface IJourney {
  id: number;
  title: string;
  steps: IStep[];
}
interface IStep {
  id: number;
  content: string;
}

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.scss"],
})
export class ListsComponent implements OnInit, AfterViewInit {
  constructor() {}
  journeys: IJourney[] = [];
  releases: IRelease[] = [];

  @ViewChild("journeyFrame", { static: false }) journeyFrame: ElementRef;
  @ViewChild("releaseFrame", { static: false }) releaseFrame: ElementRef;
  @ViewChildren("journeys") journeysDiv: QueryList<ElementRef>;

  journeysContainer: any;
  releaseContainer: any;

  //LIFE CICLE HOOKS
  ngOnInit() {
    const initialJourney: IJourney = {
      id: 1,
      title: "Initial Journey",
      steps: [],
    };
    this.journeys.push(initialJourney);
    this.addRelease("MVP");
    this.addStoryWrapper(initialJourney.id);
  }
  ngAfterViewInit() {
    this.journeysContainer = this.journeyFrame.nativeElement;
    this.releaseContainer = this.releaseFrame.nativeElement;
  }
  //PRIVATE METHODS

  private addStoryWrapper(_journeyId: number, _idToStoryLane?: number) {
    //aca entra si ya hay un wrapper
    if (_idToStoryLane) {
    }
    //aca entra si no
    else {
      this.releases.forEach((release) => {
        const newStoryWrapper: IStoryWrapper = {
          id: release.wrappers.length + 1,
          relatedJourneyId: _journeyId,
          lanes: [],
        };
        release.wrappers.push(newStoryWrapper);
      });
    }
  }
  private addStoryLane(_wrapper: IStoryWrapper) {
    const newStoryLane: IStoryLane = {
      id: _wrapper.lanes.length + 1,
      stories: [],
    };
    _wrapper.lanes.push(newStoryLane);
  }
  //APP FUNCTIONALITY
  addRelease(releaseName: string) {
    const newRelease: IRelease = {
      id: this.releases.length + 1,
      name: releaseName,
      wrappers: [],
    };
    this.releases.push(newRelease);
  }
  addJourney(index: number, journeyTitle: string) {
    const newJourney: IJourney = {
      id: this.journeys.length + 1,
      title: journeyTitle,
      steps: [],
    };
    this.journeys.splice(index, 0, newJourney);
    this.addStoryWrapper(newJourney.id);
    this.journeysDiv.changes.subscribe((_) => {
      this.onJourneysChanged("activate");
    });
  }
  addStep(_journey: IJourney, _content: string) {
    const newStep: IStep = {
      id: _journey.steps.length + 1,
      content: _content,
    };
    _journey.steps.push(newStep);
    // --------
    let storyWrapper: any;
    this.releases.forEach((release) => {
      storyWrapper = release.wrappers.find((x) => x.id == _journey.id);
    });
    // --------
    this.addStoryLane(storyWrapper);
  }
  addStory(_lane: IStoryLane, _content: string) {
    //_storyWrapper: IStoryWrapper
    // const releatedJourney = this.journeys.find(x => x.id == _storyWrapper.relatedJourneyId);
    // const stepId = releatedJourney.steps.find(x => x.id == _storyWrapper.)
    const newStory: IStory = {
      id: "Not Ready",
      content: _content,
    };
    _lane.stories.push(newStory);
  }
  //DRAG AND DROPS
  internalDropJourney(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.journeys, event.previousIndex, event.currentIndex);
    this.externalDropStoryWrapper(event);
  }
  internalDrop(event: CdkDragDrop<string[]>, _journeyId) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    if (_journeyId) {
      let storyWrapper: any;
      this.releases.forEach((release) => {
        storyWrapper = release.wrappers.find((x) => x.id == _journeyId);
      });
      this.externalDropStoryLane(event, storyWrapper);
    }
  }
  private externalDropStoryWrapper(event: CdkDragDrop<string[]>) {
    // --------
    this.releases.forEach((release) => {
      moveItemInArray(
        release.wrappers,
        event.previousIndex,
        event.currentIndex
      );
    });
    // --------
  }
  private externalDropStoryLane(
    event: CdkDragDrop<string[]>,
    _wrapper: IStoryWrapper
  ) {
    moveItemInArray(
      _wrapper.lanes,
      event.previousIndex,
      event.currentIndex
    );
  }
  //APP EVENTS
  onWheel(event: WheelEvent) {
    this.journeysContainer.scrollLeft += event.deltaY;
    this.releaseContainer.scrollLeft += event.deltaY;
    event.preventDefault();
  }
  onJourneysChanged(activator: string) {
    if (activator) {
      this.journeysContainer.scrollLeft += this.journeysContainer.scrollWidth;
      this.releaseContainer.scrollLeft += this.journeysContainer.scrollWidth;
    }
  }
}
