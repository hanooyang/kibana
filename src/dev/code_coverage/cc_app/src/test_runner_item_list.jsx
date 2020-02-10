import React from "react";
import TestRunnerItem from './test_runner_item';

export default function TestRunnerItemList({testRunnerTypes}) {

  return (
    <div className="App-TestRunner-List">
      <ul>
        {testRunnerTypes.map(renderItem)}
      </ul>
    </div>
  );
}

function renderItem(item) {
  return (
    <TestRunnerItem
      item={item}
      key={item.id}
    />
  );
}