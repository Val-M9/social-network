import { create } from "react-test-renderer";
import ProfileStatus from "../Components/Pages/Profile/ProfileInfo/ProfileStatus";

describe("ProfileStatus component test", () => {
  test("set the status to global state", () => {
    const component = create(<ProfileStatus status={"some status here"} />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("some status here");
  });
});
