import './App.css';
import { motion } from 'framer-motion';
import {
  AccountCircleRounded,
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  ColorLensRounded,
  DashboardRounded,
  SettingsRemoteRounded,
  Toc,
} from '@mui/icons-material';
import Item from './components/Item';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  const sidebarContainerVariants = {
    true: {
      width: '15rem',
    },
    false: {
      transition: {
        duration: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: '3rem',
      transition: {
        duration: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: 'center',
      width: '4rem',
    },
    false: {
      alignSelf: 'flex-start',
      marginTop: '2rem',
      width: '3rem',
    },
  };

  return (
    <div className="App">
      <motion.div
        data-open={open}
        variants={sidebarContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        <motion.div
          className="sidebar"
          variants={sidebarVariants}
          initial={`${open}`}
          animate={`${open}`}
        >
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: 'rgba(255,255,255,0.3)',
              backdropFilter: 'blur(3.5px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              transitionDuration: '130ms',
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <Toc />
          </motion.div>
          <motion.div
            layout
            className="profile"
            variants={profileVariants}
            initial={`${open}`}
            animate={`${open}`}
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(5.5px)',
              WebkitBackdropFilter: 'blur(5.5px)',
              border: '1px solid rgba( 255, 255, 255, 0.18 )',
              cursor: 'pointer',
            }}
          >
            <img
              src="https://media.bunjang.co.kr/product/177600551_1_1643548856_w360.jpg"
              alt="profile_pic"
            />
          </motion.div>
          <div className="groups">
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
              >
                ANALYSTICS
              </motion.h3>
              <Item icon={<DashboardRounded />} name="Dashboard" />
              <Item icon={<BarChartRounded />} name="Performance" />
            </div>
          </div>
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
            >
              CONTENT
            </motion.h3>
            <Item icon={<AttachMoneyRounded />} name="Sales" />
            <Item icon={<AssignmentTurnedInRounded />} name="Checklist" />
            <Item icon={<AccountCircleRounded />} name="Customers" />
          </div>
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
            >
              CUSTOMIZATION
            </motion.h3>
            <Item icon={<SettingsRemoteRounded />} name="Segments" />
            <Item icon={<ColorLensRounded />} name="Themems" />
          </div>
        </motion.div>
      </motion.div>
      <div className="body_container"></div>
    </div>
  );
}

export default App;
