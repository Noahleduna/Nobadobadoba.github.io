





<form>
    <input id="start" type="radio" name="start" required="required"/>
    <label id="label-start" for="start">START</label>
    <input id="stand" type="radio"/>
    <label id="label-stand" for="stand">STAND</label>
    <input id="hit-e" type="radio"/>
    <label class="label-hit" for="hit-e">HIT</label>
    <input id="hit-d" type="radio"/>
    <label class="label-hit" for="hit-d">HIT</label>
    <input id="hit-c" type="radio"/>
    <label class="label-hit" for="hit-c">HIT</label>
    <div id="stage_container">
      <div class="stage">
        <div class="stage__body stage__body--dealer">
          <div class="stage__labels stage__labels--dealer">
            <h2 class="stage__labels--main">DEALER'S HAND</h2>
            <div class="stage__labels--total dealer-total"><span class="sm">DEALER'S</span> TOTAL</div>
          </div>
          <div class="cards">
            <div class="card--da card--a card">
              <div class="card__face"></div>
            </div>
            <div class="card--db card--b card"> 
              <div class="card__face"></div>
            </div>
            <div class="card--dc card--c card"> 
              <div class="card__face"></div>
            </div>
            <div class="card--dd card--d card"> 
              <div class="card__face"></div>
            </div>
            <div class="card--de card--e card">
              <div class="card__face"></div>
            </div>
          </div>
        </div>
        <div class="stage__body stage__body--player">
          <div class="stage__labels stage__labels--player">
            <h2 class="stage__labels--main">YOUR HAND</h2>
            <div class="stage__labels--total user-total"><span class="sm">YOUR</span> TOTAL</div>
          </div>
          <div class="cards">
            <div class="card--ua card--a card">
              <div class="card__face"></div>
            </div>
            <div class="card--ub card--b card"> 
              <div class="card__face"></div>
            </div>
            <div class="card--uc card--c card"> 
              <div class="card__face"></div>
            </div>
            <div class="card--ud card--d card"> 
              <div class="card__face"></div>
            </div>
            <div class="card--ue card--e card">
              <div class="card__face"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="message" id="player_bust">
        <div class="message__interior"> 
          <p class="message__label"
          on:click={() => {  
            window.location.href = '/casino/blackjack';
        }}>You bust</p>
        </div>
      </div>
      <div class="message" id="dealer_bust">
        <div class="message__interior"> 
          <p class="message__label">Dealer busts</p>
        </div>
      </div>
      <div class="message" id="game_result">
        <div class="message__interior"> 
          <p class="message__label"
          on:click={() => {  
            window.location.href = '/casino/blackjack';
        }}>You Win</p>
        </div>
        <div class="message__interior"> 
          <p class="message__label">Push</p>
        </div>
        <div class="message__interior"> 
          <p class="message__label"
          on:click={() => {  
            window.location.href = '/casino/blackjack';
        }}>Dealer Wins</p>
        </div>
      </div>
    </div>
  </form>
  <div class='button'
  on:click={()=>{window.location.href='/casino'}}
    on:keypress>Return to hub</div>

<style lang="scss">
    $green: #5e1156;
$blue: #02111d;
$label_break: 480px;

:global(body) {
  padding: 0;
  margin: 0;
  background-color: $green;
  height: 100vh;
  overflow: hidden;
  font-family: "Open Sans", sans-serif;

  --card-size: 1vh;
  --card-width: calc(36 * var(--card-size));
  --card-height: calc(54 * var(--card-size));
  --card-base-x: calc(0.15 * var(--card-width));
  --card-base-y: calc(0.15 * var(--card-width));
  @media (max-aspect-ratio: 1/1) {
    // portrait
    --card-size: 0.4vh;
  }
}

@property --warningPosition {
  intial-value: 100%;
  inherits: false;
  syntax: "<percentage>";
}

@keyframes hideWarning {
  to {
    --warningPosition: 100%;
  }
}

#warning {
  font-weight: 300;
  position: absolute;
  --warningPosition: 0%;
  top: var(--warningPosition, 0);
  animation: 0s linear 0s 1 forwards running hideWarning;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $green;
  z-index: 500;
  color: #fff;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    padding: 1rem;
  }

  a {
    color: #fff;
    transition: 0.125s all;
    &:hover {
      color: $blue;
    }
  }
}

h2 {
  padding: 0;
  margin: 0;
  font-weight: 400;
}

$prefixes: u, d;
$face_names: a, b, c, d, e;
$numerals: i, ii, iii, iv, v;
$card_flip_delay: 0.5s;

form,
.stage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.stage {
  z-index: 0;
  color: #fff;
  display: flex;
  flex-direction: row;
  @media (max-aspect-ratio: 1/1) {
    // portrait
    flex-direction: column;
  }

  &__body {
    --card-offset: 0;
    text-align: center;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-aspect-ratio: 1/1) {
      // portrait
      width: 100%;
      height: 50%;
    }
    &--dealer {
      --stage-center-x: calc(
        75vw -
          (
            var(--card-width) / 2 +
              (var(--card-offset) * var(--card-base-x) / 2)
          )
      );
      --stage-center-y: calc(
        50vh -
          (
            var(--card-height) / 2 +
              (var(--card-offset) * var(--card-base-y) / 2)
          )
      );
      order: 2;
      @media (max-aspect-ratio: 1/1) {
        // portrait
        order: 1;
        --stage-center-x: calc(
          50vw -
            (
              var(--card-width) / 2 +
                (var(--card-offset) * var(--card-base-x) / 2)
            )
        );
        --stage-center-y: calc(
          22vh -
            (
              var(--card-height) / 2 +
                (var(--card-offset) * var(--card-base-y) / 2)
            )
        );
      }
    }
    &--player {
      --stage-center-x: calc(
        25vw -
          (
            var(--card-width) / 2 +
              (var(--card-offset) * var(--card-base-x) / 2)
          )
      );
      --stage-center-y: calc(
        50vh -
          (
            var(--card-height) / 2 +
              (var(--card-offset) * var(--card-base-y) / 2)
          )
      );
      order: 1;
      @media (max-aspect-ratio: 1/1) {
        order: 2;
        --stage-center-x: calc(
          50vw -
            (
              var(--card-width) / 2 +
                (var(--card-offset) * var(--card-base-x) / 2)
            )
        );
        --stage-center-y: calc(
          72vh -
            (
              var(--card-height) / 2 +
                (var(--card-offset) * var(--card-base-y) / 2)
            )
        );
      }
    }
  }

  &__labels {
    display: flex;
    padding: 1rem 0;
    opacity: 0;
    transition: 0.25s all;
    flex-direction: row;
    @media (min-height: $label_break) {
      flex-direction: column;
    }
    @media (max-aspect-ratio: 1/1) {
      // portrait
      &.stage__labels--player {
        position: absolute;
        bottom: 0;
        width: 100%;
      }
    }
    &--main {
      display: none;
      @media (min-height: $label_break) {
        display: flex;
        justify-content: center;
      }
    }

    &--total {
      text-align: left;
      width: 100%;
      display: flex;
      justify-content: center;
      .sm {
        display: inline-block;
        margin-right: 0.25rem;
        @media (min-height: $label_break) {
          display: none;
        }
      }

      &.user-total {
        counter-increment: userTotalCounter var(--user-total);
        &:after {
          font-weight: 600;
          padding-left: 0.5rem;
          content: counter(userTotalCounter);
        }
      }
      &.dealer-total {
        counter-increment: dealerTotalCounter var(--dealer-total);
        &:after {
          font-weight: 600;
          padding-left: 0.5rem;
          content: counter(dealerTotalCounter);
        }
      }
    }
  }
}

// buttons
input,
input:checked + .label-hit,
#start:not(:checked) + label ~ label,
#start:checked + label,
#stand:checked ~ label {
  display: none;
}

label {
  position: absolute;
  z-index: 100;
  color: #fff;
  width: 10rem;
  display: inline-block;
  text-align: center;
  background-color: $blue;
  font-size: 1.5rem;
  padding: 0.5rem 0;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.125s;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);

  &.label-hit {
    top: calc(50vh - 2rem);
  }
  &#label-stand {
    top: calc(50vh + 2rem);
  }

  @media (max-aspect-ratio: 1/1) {
    &.label-hit {
      top: 50%;
      left: calc(50vw - 6rem);
    }
    &#label-stand {
      top: 50%;
      left: calc(50vw + 6rem);
    }
  }
  &:hover {
    background-color: lighten($blue, 10%);
  }
}

.card {
  position: absolute;
  left: var(--stage-center-x);
  top: var(--stage-center-y);
  transition: 0.5s all;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  width: var(--card-width);
  height: var(--card-height);
  &[class^="card--u"],
  &[class*=" card--u"] {
    opacity: 0;
  }

  &__face {
    background-image: url("https://assets.codepen.io/67732/card-faces.svg");
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-size: auto 400%;
    background-repeat: no-repeat;
  }
  @for $i from 1 through length($face_names) {
    $j: $i - 1;
    &:nth-child(#{$i}) {
      margin-left: calc(#{$j} * var(--card-base-x));
      margin-top: calc(#{$j} * var(--card-base-y));
    }
  }
}

@keyframes drawCard {
  0% {
    opacity: 0;
    transform: translate(0, -100vh) rotateZ(10deg);
  }
  1% {
    opacity: 1;
  }
  50% {
    transform: translate(0, -100vh) rotateZ(10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0, 0vh) rotateZ(0deg);
  }
}

@each $p in $prefixes {
  @each $n in $face_names {
    @property --#{$p}#{$n}-offset {
      syntax: "<integer>";
      initial-value: 1;
      inherits: true;
    }

    @property --#{$p}#{$n}-suit {
      syntax: "<integer>";
      initial-value: 0;
      inherits: true;
    }

    @keyframes #{$p}#{$n}Value {
      from {
        --#{$p}#{$n}-offset: 1;
      }
      to {
        --#{$p}#{$n}-offset: 13;
      }
    }

    @keyframes #{$p}#{$n}SuitValue {
      from {
        --#{$p}#{$n}-suit: 0;
      }
      to {
        --#{$p}#{$n}-suit: 3;
      }
    }
  }
}

@each $n in $face_names {
  @property --#{$n}-position-offset {
    syntax: "<integer>";
    initial-value: -1;
    inherits: true;
  }
}

@function implode($pieces, $glue: "") {
  $result: null;
  @for $i from 1 through length($pieces) {
    $piece: nth($pieces, $i);
    @if type-of($piece) == list {
      $result: unquote("#{$result}#{$glue}#{implode($piece, $glue)}");
    } @else {
      $result: unquote("#{$result}#{$glue}#{$piece}");
    }
  }
  @if $result != null {
    $result: str-slice($result, str-length($glue) + 1, -1);
    $result: str-slice($result, str-length($glue) + 1, -1);
  }
  @return $result;
}

form {
  /* 
    --[p]-[n]-offset values 
    1 : Ace
    2 - 10: Same
    11 : J
    12 : Q
    13 : K
  */
  @each $p in $prefixes {
    @each $n in $face_names {
      --#{$p}#{$n}-offset: 1; // the index of the card, from 1-13
      --#{$p}#{$n}: min(
        10,
        var(--#{$p}#{$n}-offset)
      ); // the value of the card, maxed out at 10
      --#{$p}#{$n}-is-ace: clamp(
        0,
        2 - var(--#{$p}#{$n}-offset),
        1
      ); // returns 1 if as in ace, otherwise 0
      .card--#{$p}#{$n} .card__face {
        // set the background of the card based on the suit and face value index
        background-position: calc((var(--#{$p}#{$n}-offset) - 1) * 8.333%)
          calc(((var(--#{$p}#{$n}-suit)) / 3) * 100%);
      }
    }
  }

  @each $p in $prefixes {
    $var_names: "";
    $a: "";
    $b: "";
    $c: "";
    $d: "";

    @for $i from 1 through length($face_names) {
      $n: $p + nth($face_names, $i);
      $var_names: append($var_names, $n);

      // Add up the totals of each card combination
      $a: append($a, $n);
      $b: append($b, "var(--#{$n})");
      --#{implode($a, '')}-base-pre: calc(
        #{implode($b, " + ")}
      ); // the base numbers added up
      @for $j from 1 through $i {
        $k: "";
        @if ($j > 1) {
          $k: nth($face_names, $j - 1);
        } @else {
          $k: "base";
        }

        $l: nth($face_names, $j); // returns the current face name (a,b,c,d,e)

        --#{implode($a, '')}-#{$l}-pre: calc(
          var(--#{implode($a, "")}-#{$k}-pre) +
            (
              (10 * var(--u#{$l}-is-ace)) *
                clamp(0, calc(12 - var(--#{implode($a, "")}-#{$k}-pre)), 1)
            )
        );
      }

      --#{implode($a, '')}-total: var(
        --#{implode($a, "")}-#{nth($face_names, $i)}-pre
      );
    }
  }

  /* ********* */
  /* animation */
  /* ********* */
  $s: "";
  $sf: false;
  @each $p in $prefixes {
    @each $n in $face_names {
      $duration: 0.1 + (random(250) / 1000);
      $sduration: 0.1 + (random(250) / 1000);
      @if $sf {
        $s: "#{$s}, ";
      }
      $s: "#{$s} #{$duration}s #{$p}#{$n}Value linear infinite, #{$s} #{$sduration}s #{$p}#{$n}SuitValue linear infinite";
      $sf: 1;
    }
  }
  animation: #{$s};

  #stage_container {
    --user-total: 0;
  }

  &:valid {
    animation-play-state: paused;

    .card--ua {
      animation: 1s linear 0s 1 forwards running drawCard;
    }
    .card--ub {
      animation: 1s linear 1s 1 forwards running drawCard;
    }

    #stage_container {
      --user-total: var(--uaub-total);
      --dealer-total: var(--da-total);
      --a-position-offset: 0;
    }
    .stage__labels {
      opacity: 1;
    }
  }
}

#total {
  counter-increment: total-counter var(--uaub-total);
  &:after {
    content: counter(total-counter);
  }
}

@for $i from 1 through length($face_names) {
  $n: nth($face_names, $i);
  @if $i > 2 {
    $a: "";
    @for $j from 1 through $i {
      $a: "#{$a}u#{nth($face_names, $j)}";
    }
    #hit-#{$n}:checked {
      ~ #stage_container .card--u#{$n} {
        animation: 1s linear 0s 1 forwards running drawCard;
        opacity: 1;
      }
      ~ #stage_container .stage__player {
        --card-offset: #{$i};
      }
      ~ #stage_container .user-total,
      ~ #stage_container {
        --user-total: var(--#{$a}-total);
      }
    }
  }
}

/* Dealer cards + totals */

@property --dealer-total {
  syntax: "<integer>";
  initial-value: 0;
  inherits: true;
}

@keyframes flipB {
  to {
    --b-position-offset: 0;
    --dealer-total: var(--dadb-total);
  }
}

@keyframes flipC {
  to {
    --c-position-offset: 0;
    --dealer-total: var(--dc-target);
  }
}

@keyframes flipD {
  to {
    --d-position-offset: 0;
    --dealer-total: var(--dd-target);
  }
}

@keyframes flipE {
  to {
    --e-position-offset: 0;
    --dealer-total: var(--de-target);
  }
}

@keyframes showResult {
  to {
    margin-left: 0;
  }
}

#stage_container {
  --user-bust: clamp(
    0,
    22 - var(--user-total),
    1
  ); // return 0 if the user bust, or 1 if they're under 21
  --dealer-bust: clamp(
    0,
    22 - var(--dealer-total),
    1
  ); // return 0 if the dealer bust, or 1 if they're under 21
  --game-result: clamp(
    -1,
    var(--user-total) - var(--dealer-total),
    1
  ); // return -1 if dealer wins, 0 if push, 1 if player wins
  --game-result-opacity: min(
    var(--user-bust),
    var(--dealer-bust)
  ); // 0 if either busts, 1 if neither busts

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  @for $i from 1 through length($face_names) {
    $n: nth($face_names, $i);
    $var_names: "";
    $a: "";
    @if $i > 1 {
      @for $i from 1 through $i - 1 {
        $c: nth($face_names, $i);
        $a: append($a, $c);
      }
    }

    .card--d#{$n} {
      transform: translate(0, calc(100vh * var(--#{$n}-position-offset)));
      @if $i >2 {
        opacity: var(--d-#{implode($a, "")}-lt-seventeen);
      }
    }
  }
}

.message {
  position: absolute;
  width: 100vw;
  left: 0vw;
  z-index: 400;
  background-color: rgba(0, 0, 0, 0.5);
  &#player_bust {
    top: calc(100vh * var(--user-bust));
  }
  &#dealer_bust {
    top: calc(100vh * var(--dealer-bust));
  }
  &#game_result {
    top: calc(-100vh + (100vh * var(--game-result)));
    opacity: var(--game-result-opacity);
    margin-left: 100vw;
  }

  &__interior {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__label {
    font-size: 3rem;
    padding: 1rem 1.5rem;
    font-weight: 700;
    border-radius: 0.25rem;
    background-color: $green;
    color: #fff;
  }
  &__label:hover{
    background-color: #440d40;
  }
}

#stand:checked ~ #stage_container {
  --dealer-total: var(--da-total);

  --d-ab-lt-seventeen: clamp(0, calc(18 - var(--dadb-total)), 1);
  --diff-c: calc(
    (var(--dadbdc-total) - var(--dadb-total)) * var(--d-ab-lt-seventeen)
  );
  --dc-target: calc(var(--dadb-total) + var(--diff-c));

  --d-abc-lt-seventeen: clamp(0, calc(18 - var(--dadbdc-total)), 1);
  --diff-d: calc(
    (var(--dadbdcdd-total) - var(--dc-target)) * var(--d-abc-lt-seventeen)
  );
  --dd-target: calc(var(--dc-target) + var(--diff-d));

  --d-abcd-lt-seventeen: clamp(0, calc(18 - var(--dadbdcdd-total)), 1);
  --diff-e: calc(
    (var(--dadbdcddde-total) - var(--dd-target)) * var(--d-abcd-lt-seventeen)
  );
  --de-target: calc(var(--dd-target) + var(--diff-e));

  counter-increment: dadb-total var(--dealer-total);
  animation: 0.5s linear 1s 1 forwards running flipB,
    0.5s linear 2s 1 forwards running flipC,
    0.5s linear 3s 1 forwards running flipD,
    0.5s linear 4s 1 forwards running flipE;

  #game_result {
    animation: 0s linear 5s 1 forwards running showResult;
  }
}
.button{
  border-color:grey;
  font-size: 30px;
  border-radius: 5%;
  position:fixed;
  top:5vh;
  right:3vw;
  z-index:1000;
  color:rgb(255, 255, 255);
  background-color: #000000;
  height: 47px;
  width:220px;
  text-align: center;
}
.button:hover{
  background-color: #02111d;
  cursor: pointer;
}



</style>