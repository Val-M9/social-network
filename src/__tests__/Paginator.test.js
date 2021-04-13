import { create } from "react-test-renderer";
import Paginator from "../Components/common/Paginator/Paginator";

describe("Paginator component test", () => {
  test("pages count 11, but should be 10", () => {
    const component = create(
      <Paginator itemsTotalCount={11} pageSize={1} sectionSize={10} />
    );
    const root = component.root;
    let spans = root.findAllByType("span");
    expect(spans.length).toBe(10);
  });
  test("if pages count more then 10, button 'next' should be shown", () => {
    const component = create(
      <Paginator itemsTotalCount={11} pageSize={1} sectionSize={10} />
    );
    let button = component.root.findAllByType("button");
    expect(button.length).toBe(1);
  });
});
