import {test, expect} from '@playwright/test'

var userID;

test("GET API Call testing", async({request}) =>{
    const response = await request.get("https://reqres.in/api/users?page=2");

    //console.log(await request.json());
    await expect(response.status()).toBe(200);
});

test('POST API Request Call test', async({request}) =>{
    const postRes = await request.post("https://reqres.in/api/users", {
        data:{
            "name": "niku",
            "job":"Engineer"
            },

        headers: {
            "Context-Type":"application/json"
            }
    })

    expect(postRes.status()).toBe(201);

    /**
     * Now I need to get the id from the response
     */

    var resID = postRes.json();
    userID = resID.id

});

test('PUT API Request call test', async({request}) =>{
    const putRes = await request.put("https://reqres.in/api/users/${userID}", {
        data:{
            "name": "niku",
            "job":"Lead"
        },
        headers:{
            "Context-Type":"application/json"
        }
    })

    expect(putRes.status()).toBe(200);

});

test('DELETE API Call test', async({request}) =>{
    const deleteRes = await request.delete("https://reqres.in/api/users/${userID}");

    expect(deleteRes.status()).toBe(204);
})

/**
 * There will be a question that the API calls are not executed in a its define on the file. So it can arrange or 
 * fix in 'playwright.config.js' file,
 * make "fullyParallel: true" by default is true, So it makes as 'false'
 * 
 * If you wont to run in only one browser default comment it out the other 3 browsers in playwright.config.js file
 */