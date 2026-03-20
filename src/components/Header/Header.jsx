"use client";

import classes from "./Header.module.css";
import { Typography, IconButton, Drawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useMemo, useRef, useState } from "react";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

const Header = ({ menuItems = [], locale, siteName = "MareDiTrAI", logo = null }) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const menuTree = useMemo(() => menuItems, [menuItems]);

  const openDrawer = () => setOpen(true);

  const closeDrawer = () => {
    setOpen(false);
    setExpanded({});
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || 0;

      setScrolled(currentY > 0);

      if (currentY <= 0) {
        setHidden(false);
      } else if (currentY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClassName = [classes.header, hidden ? classes.hidden : classes.visible, scrolled ? classes.scrolled : ""].join(" ");

  return (
    <header className={headerClassName}>
      <div className={classes.inner}>
        <div className={classes.logo}>
          <Link href={locale === "hr" ? "/hr" : "/en"} className={classes.logoLink} onClick={closeDrawer}>
            {logo ? (
              <Image src={logo} fill alt={siteName} className={classes.logoImage} />
            ) : (
              <Typography variant="h4" className={classes.logoText}>
                {siteName}
              </Typography>
            )}
          </Link>
        </div>

        <nav className={classes.menuDesktop}>
          {menuTree.map((item) => {
            const children = item.childNodes || item.children || [];
            const hasChildren = children.length > 0;

            return (
              <div key={item.databaseId} className={classes.menuItem}>
                <Link href={item.uri} className={classes.link}>
                  {item.label}
                  {hasChildren && <KeyboardArrowDownIcon className={classes.arrow} />}
                </Link>

                {hasChildren && (
                  <div className={classes.dropdown}>
                    {children.map((child) => (
                      <Link key={child.databaseId} href={child.uri} className={classes.dropdownLink}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className={classes.right}>
          <LanguageSwitch locale={locale} />

          <div className={classes.menuMobile}>
            <IconButton onClick={openDrawer} className={classes.iconBtn}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <div className={classes.drawer}>
          <div className={classes.drawerTop}>
            <Typography variant="h6">{siteName}</Typography>
            <IconButton onClick={closeDrawer}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className={classes.drawerNav}>
            {menuTree.map((item) => {
              const children = item.childNodes || item.children || [];
              const hasChildren = children.length > 0;
              const isOpen = !!expanded[item.databaseId];

              return (
                <div key={item.databaseId} className={classes.drawerItem}>
                  <div className={classes.drawerRow}>
                    <Link href={item.uri} className={classes.drawerLink} onClick={closeDrawer}>
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <button className={`${classes.expandBtn} ${isOpen ? classes.expandBtnOpen : ""}`} onClick={() => toggleExpand(item.databaseId)}>
                        <KeyboardArrowDownIcon />
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <div className={`${classes.drawerSub} ${isOpen ? classes.drawerSubOpen : ""}`}>
                      {children.map((child) => (
                        <Link key={child.databaseId} href={child.uri} className={classes.drawerSubLink} onClick={closeDrawer}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
