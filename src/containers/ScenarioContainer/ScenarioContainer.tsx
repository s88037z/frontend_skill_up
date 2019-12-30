import React, { useCallback } from 'react'
import ScenarioList from '../../components/ScenarioList/ScenarioList'
import FakeScenarioImg from '../../assets/icons/fake-scenario.png'

export default function ScenarioContainer() {
  const scenarioList = [
    {
      id: 1,
      display_name: 'abc',
      created_at: '2019-12-19T11:22:33Z',
      updated_at: '2019-12-20T03:04:05Z',
      thumbnail_url: FakeScenarioImg,
    },
    {
      id: 2,
      display_name: 'def',
      created_at: '2019-12-18T11:22:33Z',
      updated_at: '2019-12-20T07:08:09Z',
      thumbnail_url: FakeScenarioImg,
    },
    {
      id: 3,
      display_name: 'qwe',
      created_at: '2019-12-19T11:22:34Z',
      updated_at: '2019-12-20T12:00:10Z',
      thumbnail_url: FakeScenarioImg,
    },
    {
      id: 4,
      display_name: 'htyg',
      created_at: '2019-12-16T11:52:39Z',
      updated_at: '2019-12-20T03:55:44Z',
      thumbnail_url: FakeScenarioImg,
    },
    {
      id: 5,
      display_name: 'vvvv',
      created_at: '2019-12-1519T03:00:28Z',
      updated_at: '2019-12-16T02:28:25Z',
      thumbnail_url: FakeScenarioImg,
    },
    {
      id: 6,
      display_name: 'nnmm',
      created_at: '2019-12-17T09:56:04Z',
      updated_at: '2019-12-19T11:11:11Z',
      thumbnail_url: FakeScenarioImg,
    },
  ]

  const onGetScenarioList = useCallback(() => {
    // dispatch action
    console.log('onGetScenarioList')
  }, [])

  return (
    <>
      <ScenarioList scenarioList={scenarioList} onGetScenarioList={onGetScenarioList}></ScenarioList>
    </>
  )
}
