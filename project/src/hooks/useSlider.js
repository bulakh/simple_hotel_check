import { SCROLL_WIDTH } from "../const";

export const scrollLeft = (ref) => {
  ref.current.scrollLeft -= SCROLL_WIDTH;
}

export const scrollRigth = (ref) => {
  ref.current.scrollLeft += SCROLL_WIDTH;
}
