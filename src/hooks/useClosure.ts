'use client';
import { useState } from "react";

export const useClosure = (defaultVisible: boolean = false) => {
  const [visible, setVisible] = useState(defaultVisible);

  const onFalseVisible = () => setVisible(false);

  const onTrueVisible = () => setVisible(true);

  const onToggleVisible = () => setVisible((prev) => !prev);

  return { onFalseVisible, onToggleVisible, onTrueVisible, visible };
};
