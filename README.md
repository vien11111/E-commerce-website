1. Structure base
2. Write common component
3. Create a new page
4. Using component




- [x] Doing
## Structure
- src/apis: Quản lí các ENDPOINT để request api
- src/app/store.js : đầy là `store` của dự án nơi kết nối tất cả reducer lại 
- src/components: Lưu trữ component sử dụng chung cho toàn bộ dự án
- src/features: Quản lí tất cả `features` của dự án
  - name.slice: chứa các action và reducer của feature đó.

- routes.js: nơi khai bảo tất cả các route cha của 1 feature đọc code thêm để hiểu
  - Tất cả reducer được map ra ở `App.js`


## Base knowledge
- [CSS variable](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Redux-thunk](https://redux-toolkit.js.org/api/createAsyncThunk)
- [Antd-Design](https://ant.design/components/overview/)
- [React-Hooks](https://reactjs.org/docs/hooks-intro.html)

## Payment
- Used VN pay cart test
## Reference Doc
- [Why-key-required-in-list](https://reactjs.org/docs/lists-and-keys.html)
- [VN-PAY](https://sandbox.vnpayment.vn/apis/vnpay-demo/)