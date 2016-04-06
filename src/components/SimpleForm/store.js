import PubSub from "pubsub-js";

export default {
  updateState(state) {
    PubSub.publish('STATE_UPDATE', state);
  }
}
