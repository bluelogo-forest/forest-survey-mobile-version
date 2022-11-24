export const getSummary = async () => {
    const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkEwQjVCMUFCMTUzMjI1MzRDNUIxQUU3QTdEMjZDRkI3NDYzNTIwMzNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6Im9MV3hxeFV5SlRURnNhNTZmU2JQdDBZMUlETSJ9.eyJuYmYiOjE2NjkyNzA4NTgsImV4cCI6MTY2OTI3ODA1OCwiaXNzIjoiaHR0cHM6Ly9zYW1zdW5nLnN1bXRvdGFsLmhvc3QvYXBpc2VjdXJpdHkiLCJhdWQiOlsiZXh0YXBpcyIsImh0dHBzOi8vc2Ftc3VuZy5zdW10b3RhbC5ob3N0L2FwaXNlY3VyaXR5L3Jlc291cmNlcyJdLCJjbGllbnRfaWQiOiJTQU1TVU5HRUxFQ1RST05JQ1NfUFJPRF9iMjRlNjZmNDgwZDE0YmVjYmI1NDg0YzQzYTQ1YTZkYyIsInN1YiI6ImJwby40IiwiYXV0aF90aW1lIjoxNjY5MjcwMzM4LCJpZHAiOiJsb2NhbCIsIm5hbWUiOiJicG8uNCIsInVzZXJuYW1lIjoiYnBvLjQiLCJtYXNrZWR1c2VyaWQiOiJCRjMyMzE3MTY0QzMyODk5NUMzRDVGQjJFNEI2OTRCNCIsInJvbGUiOiJQb3J0YWwgVXNlciIsInRlbmFudCI6IlNBTVNVTkdFTEVDVFJPTklDU19QUk9EIiwiYnJva2Vyc2Vzc2lvbiI6ImM3NzJlMDBmOTg2NDQ2NTY4Y2E3OTkwNTQ0MzIyOTAwIiwiY3VsdHVyZSI6ImVuLVVTIiwibGFuZ3VhZ2UiOiJlbi11cyIsImRhdGVmb3JtYXQiOiJNTS9kZC95eXl5IiwidGltZWZvcm1hdCI6ImhoOm1tIGEiLCJ1c2VyaWQiOiIyMTAzNTciLCJwZXJzb25wayI6IjEwNjU4MyIsImd1ZXN0YWNjb3VudCI6IjAiLCJ1c2VydGltZXpvbmVpZCI6IkFzaWEvU2VvdWwiLCJ0d29MZXR0ZXJJU09MYW5ndWFnZU5hbWUiOiJlbiIsImlzcnRsIjoiRmFsc2UiLCJwZXJzb25ndWlkIjoiZWRhMWU0YmYtNDZlNS00ZmI4LTkyYjQtMDMxMjE1ZmUwYTkwIiwidXNlcmlkaGFzaCI6Ii0xOTIzNTc0NTI2Iiwid2ZtdXNlciI6IlRydWUiLCJwcm9wZXJuYW1lIjoiYnBvKzQiLCJqdGkiOiI5MTQ0MDM5MTQ2OTdDQ0U4NEY1NzAxQzFEMDk0MTA0NCIsImlhdCI6MTY2OTI3MDg1OCwic2NvcGUiOlsiYWxsYXBpcyJdLCJhbXIiOlsicHdkIl19.SFfWpn6c1oMWjyRoma6QOPPxQkpyJmKW2lpN3i1uvq0l22QG6mt7qMHBePNMoyRzMS8YR8oiriIGxBUDvwh9L1kH0fo5I5RK66LZIWg_FawIHU0kM3xfVvqg6ZXxOdqKRvXc760M8a1Q4zGVyO_0NLH6-IoSZkL-V4X_cVS0RPafpjxjZXOTPDF8ZV7X3YWNlF_gULpDUk87pQIYth8ZLNxN4dJtMYEbr0FJxHvnN01rdJwBia9Pu96WRoFLcOqBihBSpTE44Kj0VVq3wfWHH4PJo0XGAg9mObkOLjVjK1NIykA8My4rczx2rt6WNC16xnssKorGSQMYaJh3Oq0h4w';
    const baseUrl = "https://samsung.sumtotal.host/apis";
    const response = await fetch(`${baseUrl}/api/v1/users/summary`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
        },
    });

    if (response.status === 200) {
        const data = await response.json();
        console.log(data)
    }
}
