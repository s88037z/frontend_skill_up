import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../reducer/rootReducer'
import { getScenarioAct, deleteScenarioAct, DeleteScenarioData } from '../../reducer/scenario/scenarioActions'
import ScenarioList from '../../components/ScenarioList/ScenarioList'

export default function ScenarioContainer() {
  const { scenarioList } = useSelector((state: StoreState) => ({
    scenarioList: state.scenario.scenarioList,
  }))
  const dispatch = useDispatch()
  const onGetScenarioList = useCallback(() => {
    dispatch(getScenarioAct())
  }, [dispatch])

  const onDeleteScenarioList = useCallback(
    (data: DeleteScenarioData) => {
      dispatch(deleteScenarioAct(data))
    },
    [dispatch],
  )

  return (
    <>
      <ScenarioList
        scenarioList={scenarioList}
        onGetScenarioList={onGetScenarioList}
        onDeleteScenarioList={onDeleteScenarioList}
      />
    </>
  )
}
