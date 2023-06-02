import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
interface Props {
  children: any;
  requireAdmin: boolean;
}

export default function ProtectedRoute({ children, requireAdmin }: Props) {
  const { user } = useAuthContext();
  //
  if (user === undefined || null) {
    return <></>;
  } else if (!user || (requireAdmin && !user.isAdmin)) {
    // ! 일단 if 문이 false여야지 들어가진다. 목표는 둘다 false
    // 1번
    // !user는 로그인한 유저인지 아닌지만 판단, 비로그인(user정보가)없으면 무조건 true로 만들어서 "/" home경로로 보내버림
    //2 번 만약 로그인 유저라서 통과되었다면 2번째 조건
    // !requireAdmin이 false면 (로그인상태에서 /Cart 진입시) 무조건 그냥 뒤 상관없이 접근 가능함.
    // 2번
    // !requireAdmin이 true라 가정하면 , user.isAdmin이 (admin이)ture여야지 flase로 접근 가능.
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
