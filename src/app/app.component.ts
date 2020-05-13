import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  keyframes,
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("box", [
      state("start", style({ background: "blue" })),
      state("end", style({ background: "red", transform: "scale(1.2)" })),
      state(
        "special",
        style({
          background: "orange",
          transform: "scale(0.5)",
          borderRadius: "50%",
        })
      ),
      transition("start => end", animate(500)),
      transition("end => start", animate("500ms ease-in-out")),
      transition("special <=> *", [
        style({ background: "green" }),
        animate("1s", style({ background: "black" })),
        animate("1s"),
      ]),
      // void => *
      transition(":enter", [
        animate(
          "4s",
          keyframes([
            style({ background: "red" }),
            style({ background: "orange" }),
            style({ background: "yellow" }),
            style({ background: "blue" }),
          ])
        ),
        // style({ opacity: "0" }),
        // animate("1s")
      ]),
      // * => void
      transition(":leave", [
        style({ opacity: "1" }),
        group([
          animate(
            1000,
            style({
              opacity: 0,
              transform: "scale(1.5)",
            })
          ),
          animate(
            1000,
            style({
              color: "white",
              fontWeight: "bold",
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  boxState = "start";
  visible = true;
  animate() {
    this.boxState = this.boxState === "start" ? "end" : "start";
  }

  startAnimation(event: AnimationEvent) {
    console.log(event);
  }
}
