import createDomElemFromString from "./create-dom.js";

export default function moduleFooter(data) {

    const footerTemplate = (state) => `    <ul class="stats">
      <li class="stats__result stats__result--${state.lastAnswer[0]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[1]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[2]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[3]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[4]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[5]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[6]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[7]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[8]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[9]}"></li>
    </ul>`;

    return createDomElemFromString(footerTemplate(data));
};