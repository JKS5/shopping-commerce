import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
interface Props {
  children: any;
  requireAdmin: boolean;
}

export default function ProtectedRoute({ children, requireAdmin }: Props) {
  const { user } = useAuthContext();
  //
  if (!user || (requireAdmin && !user.isAdmin)) {
    // 잘못 들어온 현재경로를 history에 두고 싶지 않다면 replace={ture}로 두어서 사용
    return <Navigate to="/" replace />;
    //useNavigate() 써도 된다.
  }
  //로그인한 사용자가 있는지 확인
  // 그 사용자가 어드민 권한이 있는지 확동
  //requireAdmin이 true인 경우에는 로그인도 되어야 하고, 어드민 권한도가지고 있어야함.
  //조건에 맞지 않으면 상위 경로로 이동
  //조건에 맞는 경우만 Children 보여줌
  return children;
}
