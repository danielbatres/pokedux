import React from 'react'
import { Input } from "antd";

const Searcher = () => {
  return <Input.Search placeholder='Search...' style={{ marginBottom: 10 }} />
}

export{ Searcher };