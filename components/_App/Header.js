import { Menu, Container, Image, Icon } from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { setActiveRoute, startRouteProgress } from "../../helpers/router";
import NProgress from "nprogress";

function Header() {
  const { pathname } = useRouter();

  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();

  const user = true;
  let menuContent;

  if (user) {
    menuContent = (
      <>
        <Link href="/create">
          <Menu.Item header active={setActiveRoute(pathname, "/create")}>
            <Icon name="add square" size="large" />
            Create
          </Menu.Item>
        </Link>
        <Link href="/account">
          <Menu.Item header active={setActiveRoute(pathname, "/account")}>
            <Icon name="user" size="large" />
            Account
          </Menu.Item>
        </Link>
        <Menu.Item header>
          <Icon name="sign out" size="large" />
          Logout
        </Menu.Item>
      </>
    );
  }

  if (!user) {
    menuContent = (
      <>
        {" "}
        <Link href="/login">
          <Menu.Item header active={setActiveRoute(pathname, "/login")}>
            <Icon name="sign in" size="large" />
            Login
          </Menu.Item>
        </Link>
        <Link href="/signup">
          <Menu.Item header active={setActiveRoute(pathname, "/signup")}>
            <Icon name="signup" size="large" />
            Signup
          </Menu.Item>
        </Link>
      </>
    );
  }

  return (
    <Menu fluid id="menu" inverted>
      <Container text>
        <Link href="/">
          <Menu.Item header>
            <Image
              size="mini"
              alt="Picture of miniature store"
              src="/logo.svg"
              style={{ marginRight: "1em" }}
            />
            E-Store
          </Menu.Item>
        </Link>
        <Link href="/cart">
          <Menu.Item header active={setActiveRoute(pathname, "/cart")}>
            <Icon name="cart" size="large" />
            Cart
          </Menu.Item>
        </Link>

        {menuContent}
      </Container>
    </Menu>
  );
}

export default Header;
