import { useDispatch, useSelector } from 'react-redux'
const dispatch = useDispatch()

export const xIsRunMenu = useSelector((state) => state.settings.xIsRunMenu)

export default xIsRunMenu