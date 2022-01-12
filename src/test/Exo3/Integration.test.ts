import { getPl } from "../../utilities/request.pl";

// Object de retour json placeholder
// {
//     userId: 1,
//     id: 1,
//     title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum",
// }

describe("Integration json placeholder test", () => {
  it.only("just for 1 user", async () => {
    let user = await getPl();
    expect(user.userId).toBe(1);
    expect(user.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  });
});
