async function callApi(path, method, body) {
    if(method === "GET"){
        const response = await fetch(`http://localhost:3005/${path}`);
        return await response.json();
    } else {
        const response = await fetch(`http://localhost:3005/${path}`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.json();
    }
}
const ready = document.querySelector("#accordion");
if(ready){
    document.querySelector("#add-user-form").addEventListener("submit", async function(e){
        e.preventDefault(); 
        const inputs = document.forms["add-user-form"].getElementsByTagName("input");
        const user = {};
        for (index = 0; index < inputs.length; ++index) {
            // deal with inputs[index] element.
            const name = inputs[index].name;
            const value = inputs[index].value;
            if(name) user[name] = value;
        }
        console.log(user);
        const res = await callApi("", "POST", (user));
        if(res.success) {
            alert("user added successfully");
            window.location.reload();
        } else {
            alert(res.message);
        }
    });
    document.querySelector("#delete-user-form").addEventListener("submit", async function(e){
        e.preventDefault(); 
        const inputs = document.forms["delete-user-form"].getElementsByTagName("input");
        const user = {};
        for (index = 0; index < inputs.length; ++index) {
            // deal with inputs[index] element.
            const name = inputs[index].name;
            const value = inputs[index].value;
            if(name) user[name] = value;
        }
        console.log(user);
        const res = await callApi(user.email, "DELETE", user);
        console.log(res)
        if(res.success) {
            alert("User deleted successfully");
            window.location.reload();
        } else {
            alert(res.message);
        }
    });
    
    document.querySelector("#update-user-form").addEventListener("submit", async function(e){
        e.preventDefault(); 
        const inputs = document.forms["update-user-form"].getElementsByTagName("input");
        const user = {};
        for (index = 0; index < inputs.length; ++index) {
            // deal with inputs[index] element.
            const name = inputs[index].name;
            const value = inputs[index].value;
            if(name) user[name] = value;
        }
        console.log(user);
        const res = await callApi("", "PUT", user);
        console.log(res)
        if(res.success) {
            alert("User Details successfully updated");
            window.location.reload();
        } else {
            alert(res.message);
        }
    });
}