import User from "../../../models/User";
import emulateCallingController from "../../testingUtils/emulateCallingController";
import postController from "../post";

it("should create a new user in the database", async () => {
  const mockSignUpData = {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "securepassword",
    admin: "true",
  };

  await emulateCallingController(postController, {
    body: mockSignUpData,
  });

  const userInDb = await User.findOne({ username: "johndoe" });
  expect(userInDb).toBeTruthy();
  expect(userInDb?.firstName).toBe("John");
  expect(userInDb?.lastName).toBe("Doe");
  expect(userInDb?.admin).toBe(true);
});

it("should redirect to the index", async () => {
  const mockSignUpData = {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "securepassword",
    admin: "true",
  };

  const { getRedirectInformation } = await emulateCallingController(
    postController,
    {
      body: mockSignUpData,
    },
  );

  expect(getRedirectInformation().redirectPage).toBe("/");
});
